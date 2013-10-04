using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNet_MVC_AngularJS_SPA.Services
{
    public class ActivityServices
    {

        AppDataEntities db = new AppDataEntities();


        public int SaveActivity(Activity objActivity)
        {

            if (objActivity.ID > 0)
            {
                //save existing user
                Activity existingActivity = (from e in db.Activities
                                     select e).Where(e => e.ID == objActivity.ID).FirstOrDefault();

                existingActivity.Activity_Name = objActivity.Activity_Name;
                existingActivity.Description = objActivity.Description;
                return db.SaveChanges();


            }
            else
            {
                // add new user
                db.Activities.Add(objActivity);
            }

            return db.SaveChanges();
        }

        public IList<Activity> GetAllActivities(int UserId)
        {
            IList<Activity> lstActivty = (from e in db.Activities
                                          select e).Where(e => e.UserId == UserId).ToList<Activity>();

            return lstActivty;
           
        }

    }
}