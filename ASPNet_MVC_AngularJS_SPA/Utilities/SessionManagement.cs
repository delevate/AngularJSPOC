using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNet_MVC_AngularJS_SPA.Utilities
{
    public class SessionManagement
    {

        public static void SetValue(String key, String value)
        {

            HttpContext.Current.Session.Add(key, value);
        
        }

        public static String GetValue(String key)
        {
            //check if user is logged in.
            // or else return -1;

            return (HttpContext.Current.Session[key]!=null ? HttpContext.Current.Session[key].ToString() : "-1");
        }


        public  static void Logout()
        {
            HttpContext.Current.Session.Clear();
            HttpContext.Current.Session.Abandon();

        }
    }
}