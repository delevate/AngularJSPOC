using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNet_MVC_AngularJS_SPA.Services
{
    public class UserServices
    {

        AppDataEntities db = new AppDataEntities();

        public int SaveUser(User objUser)
        {

            if (objUser.ID > 0)
            {
                //save existing user
                User existingUser = (from e in db.Users
                                     select e).Where(e => e.ID == objUser.ID).FirstOrDefault();

                existingUser = objUser;


            }
            else
            { 
             // add new user
                db.Users.Add(objUser);
            }

            return db.SaveChanges();

                    
        }


        public User UserLogin(String username, String password)
        {

            User existingUser = (from e in db.Users
                                 select e).Where(e => (e.Email == username) && (e.Password == password)).FirstOrDefault();

            return existingUser;
        
        }
    }
}