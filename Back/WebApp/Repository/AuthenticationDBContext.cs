using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApp.Models;

namespace WebApp.Repository
{
    public class AuthenticationDBContext : IdentityDbContext<User>
    {
        public AuthenticationDBContext(DbContextOptions<AuthenticationDBContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(
                new User() { Id = "1", UserName = "mili", PasswordHash = "123456787654321", FullName = "Aleksa Milivojevic", DOB = DateTime.Now, Role = "Dispatcher", StreetID = 3, Email = "bla" }, 
                new User() { Id = "2", UserName = "admin", PasswordHash = "1234567887654321", FullName = "Admin Admin", DOB = DateTime.Now, Role = "Dispatcher", StreetID = 3, Email = "bla" }
                );
            base.OnModelCreating(modelBuilder);
        }
    }
}
