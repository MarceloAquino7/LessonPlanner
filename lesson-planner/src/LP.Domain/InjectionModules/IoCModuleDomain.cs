using System.Reflection;
using Autofac;
using LP.Domain.Models;
using Module = Autofac.Module;

namespace LP.Domain.InjectionModules
{
    public class IoCModuleDomain : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var assemblyToScan = Assembly.GetAssembly(typeof(User));

            builder
                .RegisterAssemblyTypes(assemblyToScan)
                .Where(c => c.IsClass
                            && c.IsInNamespace("LP.Domain.CommandHandlers"))
                .AsImplementedInterfaces();

            builder
                .RegisterAssemblyTypes(assemblyToScan)
                .Where(c => c.IsClass
                            && c.IsInNamespace("LP.Domain.Commands"))
                .AsImplementedInterfaces();
        }
    }
}
