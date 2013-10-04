using System.Web;
using System.Web.Mvc;

namespace ASPNet_MVC_AngularJS_SPA
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}