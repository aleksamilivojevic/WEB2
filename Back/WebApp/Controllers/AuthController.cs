using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebApp.DTOs;
using WebApp.Models;
using WebApp.Repository;

namespace WebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly DataDBContext data;
        private readonly AuthenticationDBContext auth;
        private UserManager<User> _userManager;
        private ApplicationSettings _appSettings;
        private int bla;
        public AuthController(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, DataDBContext d, AuthenticationDBContext a)
        {
            _userManager = userManager;
            _appSettings = appSettings.Value;
            data = d;
            auth = a;
        }

        // GET: api/<AuthController>
        [HttpGet]
        public IActionResult Get()
        {
            List<UserDTO> temp = new List<UserDTO>();
            foreach (User s in auth.Users)
            {
                temp.Add(new UserDTO() { Username=s.UserName, Password=s.PasswordHash });
            }
            return Ok(new { retval = temp });
        }


        [HttpPost]
        [Route("Login")]
        // POST: api/<controller>/Login
        public async Task<IActionResult> Login([FromBody] UserLoginDTO login)
        {
            //User user = await _userManager.FindByLoginAsync(login.Username,login.Password);
            User user = new User();
            foreach(var e in auth.Users)
            {
                if(e.UserName == login.Username)
                {
                    if(e.PasswordHash == login.Password)
                    {
                        user = e;
                    }
                    else
                    {
                        user = null;
                    }

                }
                else
                {

                }
            }
            if (user != null) //&& await _userManager.CheckPasswordAsync(user, login.Password))
            {
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString()),
                        new Claim("Role", user.Role),
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),

                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token, role = user.Role, name = user.FullName, userId = user.Id.ToString() });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        // POST: api/<controller>
        [HttpPost]
        [Route("Register")]
        public async Task<Object> Post([FromBody] UserDTO model)
        {
            foreach(var i in data.Streets)
            {
                if(i.Name==model.Street)
                {
                    bla = i.Id;
                }
            }
            User applicationUser = new User()
            {
                UserName = model.Username,
                Email = model.Email,
                FullName = model.FullName,
                DOB = model.DOB,
                Role = model.Role,
                CrewID = model.CrewID,
                StreetID = bla
                //StreetID = (await data.Streets.FirstOrDefaultAsync(x => x.Name == model.Street)).Id
            };
            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                if (result.Errors.Any())
                {
                    var test = result.Errors.ToList();
                    return BadRequest(new { message = test[0].Description });
                }
                return Ok();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        [HttpGet]
        [Route("GetProfile")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetProfile()
        {
            UserDTO bla = null;
            User temp = await _userManager.FindByIdAsync(User.Claims.First(x => x.Type == "UserID").Value);
            foreach (var i in data.Streets)
            {
                if(i.Id==temp.StreetID)
                {
                    bla.Street = i.Name;
                }
            }
            UserDTO retval = new UserDTO()
            {
                FullName = temp.FullName,
                Username = temp.UserName,
                Role = temp.Role,
                Email = temp.Email,
                CrewID = temp.CrewID,
                Street = bla.Street,
                //Street = (await data.Streets.FirstOrDefaultAsync(x => x.Id == temp.StreetID)).Name,
                DOB = temp.DOB
            };
            return Ok(new { retval });
        }

        [HttpPost]
        [Route("EditProfile")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> EditProfile(EditProfileDTO model)
        {
            int blaa = 0;
            string id = User.Claims.First(x => x.Type == "UserID").Value;
            User temp = await _userManager.FindByIdAsync(id);
            foreach (var i in data.Streets)
            {
                if (i.Name == model.body.Street)
                {
                    blaa = i.Id;
                }
            }
            temp.FullName = model.body.FullName;
            temp.UserName = model.body.Username;
            temp.Role = model.body.Role;
            temp.Email = model.body.Email;
            temp.CrewID = model.body.CrewID;
            //temp.StreetID = (await data.Streets.FirstOrDefaultAsync(x => x.Name == model.body.Street)).Id;
            temp.StreetID = blaa;
            temp.DOB = model.body.DOB;
            await _userManager.UpdateAsync(temp);
            if (!string.IsNullOrWhiteSpace(model.body.Password))
            {
                if ((await _userManager.ChangePasswordAsync(temp, model.currentPassword, model.body.Password)).Succeeded)
                {
                    return Ok(new { msg = "changedpass" });
                }
                else
                {
                    return Ok(new { msg = "error" });
                }
            }
            return Ok(new { msg = "ok" });
        }
        /*
        [HttpPost]
        [Route("SocialLogin")]
        // POST: api/<controller>/Login
        public async Task<IActionResult> SocialLogin([FromBody] UserLoginDTO loginModel)
        {
            var test = _appSettings.JWT_Secret;
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Expires = DateTime.UtcNow.AddMinutes(5),
                //Key min: 16 characters
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(securityToken);
            return Ok(new { token });

        }
        
        [HttpGet]
        [Route("SignInWithGoogle")]
        public IActionResult SignInWithGoogle()
        {
            return new ChallengeResult(
            GoogleDefaults.AuthenticationScheme,
            new AuthenticationProperties
            {
                RedirectUri = Url.Action(nameof(HandleExternalLogin))
            });
        }
        
        public async Task<IActionResult> HandleExternalLogin()
        {
            var authenticateResult = await HttpContext.AuthenticateAsync("Identity.External");

            if (!authenticateResult.Succeeded)
                return BadRequest(); 

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                  {
                        new Claim("Roles", "admin")//admin vrv treba da bude regular user za social login
                  }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234567812345678")), SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(securityToken);

            HttpContext.Response.Cookies.Append("jwt", token);

            return Redirect("http://localhost:4200/home");
        }
        */
    }
}
