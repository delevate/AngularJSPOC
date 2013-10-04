using ASPNet_MVC_AngularJS_SPA.Models;
using ASPNet_MVC_AngularJS_SPA.Services;
using ASPNet_MVC_AngularJS_SPA.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNet_MVC_AngularJS_SPA.Controllers
{
    public class UserController : Controller
    {
        //
        // GET: /User/
        [HttpPost]
        public JsonResult UserAuthentication(String email, String password)
        {

            UserServices service = new UserServices();
            User existinguser= service.UserLogin(email, password);
            if (existinguser!=null && existinguser.ID>0)
            {
                SessionManagement.SetValue("UserId", existinguser.ID.ToString());
                SessionManagement.SetValue("UserName", existinguser.Name.ToString());
                return Json(existinguser, JsonRequestBehavior.AllowGet);
            }
                        
            else {
                Error err = new Error();
                err.ErrorMessage = "Username and password does not match";
                return Json(err, JsonRequestBehavior.AllowGet);
            }
        }


        [HttpPost]
        public JsonResult GetLoggedInUser()
        {
            AppUser user = new AppUser();
            
            user.UserId = Convert.ToInt16( SessionManagement.GetValue("UserId"));
            if (user.UserId > 0)
            {
                user.UserName = SessionManagement.GetValue("UserName");
            }
            else {
                user.UserName = "";
            }
            return Json(user, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult LogoutUser()
        {
            SessionManagement.Logout();

            return Json("true", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult NewUser()
        {


            return Json("", JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public JsonResult UserSignUp(User objUser)
        {
           
            if (ModelState.IsValid)
            {
                UserServices service = new UserServices();
                service.SaveUser(objUser);

                return Json(objUser, JsonRequestBehavior.AllowGet);
            }

            return Json("", JsonRequestBehavior.AllowGet);
        
        }

        [HttpPost]
        public JsonResult AddNewActivity(Activity objActivity)
        {
            ActivityServices service = new ActivityServices();
            if (ModelState.IsValid)
            {
                int loggedInUser = Convert.ToInt16( SessionManagement.GetValue("UserId"));
                objActivity.UserId = loggedInUser;
                service.SaveActivity(objActivity);
                return Json(objActivity, JsonRequestBehavior.AllowGet);

            }
            return Json("", JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public JsonResult GetActivities()
        {
           
            ActivityServices service = new ActivityServices();
            int loggedInUser =Convert.ToInt16(SessionManagement.GetValue("UserId"));
            if (loggedInUser > 0)
            {
                return Json(service.GetAllActivities(loggedInUser), JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
    }
}
