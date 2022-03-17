using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations.Design;
using System.Linq;
using System.Text;

namespace WebApp
{
    // Don't forget to add an instance of this class to your DbConfiguration descendant's constructor
    // this.CodeGenerator = new CustomCSharpMigrationCodeGenerator();

    // Override the methods to add custom generation steps to a specific model element
    // see https://github.com/aspnet/EntityFramework6/blob/master/src/EntityFramework/Migrations/Design/CSharpMigrationCodeGenerator.cs
    internal class CustomCSharpMigrationCodeGenerator : CSharpMigrationCodeGenerator
    {
    }
}
