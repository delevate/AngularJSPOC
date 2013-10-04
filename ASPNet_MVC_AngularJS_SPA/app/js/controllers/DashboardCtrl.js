define([], function () {
    return ['$route','$location', '$scope', '$http', function ($route,$location, $scope, $http) {
        // You can access the scope of the controller from here
        // on load call api method to get login information.
        // 
        debugger;
        $scope.Activities = new Array();
        $scope.UserName = "Logged In User";
        
        $scope.editrow = true;
        
        debugger;
        function GetActivityByUser() {
            debugger;
           
            $http.post("User/GetActivities").
                        success(function (data, status) {
                            // value is returned from api
                            debugger;

                            $scope.Activities = data;
                            
                       

                        }).
                             error(function (data, status) {
                                 debugger;
                                 console.log("error");

                                 //oops there is some issues with the api
                                 // or ajax call.

                             });
        }

        // on change of activity refresh activity 
        $scope.$on(
                    "activityChanged",
                    function (event) {
                        debugger;
                        GetActivityByUser();

                    }
                );

        $http.post("User/GetLoggedInUser").
            success(function (data, status) {
                // value is returned from api
                debugger;
                if (data.UserId > 0) {
                    $scope.UserName = data.UserName;
                    //call to get activities by username.
                    /* start - get activity from server */
                    $http.post("User/GetActivities").
                            success(function (data, status) {
                                     // value is returned from api
                                      debugger;
                                  
                                      $scope.Activities = data;
                                       //call to get activities by username.
                                         /* start - get activity from server */


                                            /*-- End of Acivity Get*/
                                        
                                          }).
                                 error(function (data, status) {
                               debugger;
                               console.log("error");
                                
                                     //oops there is some issues with the api
                                     // or ajax call.

                                      });

                    /*-- End of Acivity Get*/
                }
                else {
                    
                    $location.path('/Error');
                }
            }).
            error(function (data, status) {
                debugger;
                console.log("error");
                location.path("/" + "?Error-Invalid user");
                //oops there is some issues with the api
                // or ajax call.

            });
        $scope.logoutUser = function () {
            alert('logout');
            //call to logout api.
            $http.post("User/LogoutUser").
            success(function (data, status) {
                // value is returned from api
                debugger;
              

                    $location.path('/Error');
              
            }).
            error(function (data, status) {
                debugger;
                console.log("error");
                $location.path("/" + "?Error-Invalid user");
                //oops there is some issues with the api
                // or ajax call.

            });

        }
        $scope.$on("updateItems", function (d) {
            console.log("in updateItems.. hope this works");
            //$scope.Activities = d;
            debugger;
            //$location.path("/dashboard");
        });

        $scope.Display = function (activity) {
            console.log(activity);
        }
        $scope.LoadActivity = function () {
            $location.path('/AddActivity');
        }

        $scope.submitNewActivity = function () {
            $scope.EditActivity = "";
            $http.post("User/AddNewActivity", $scope.Activity).
            success(function (data, status) {
                debugger;
                /*var newActivities = [];
                // alert(data.ErrorMessage);
                angular.forEach($scope.Activities, function (obj) {
                    newActivities.push(obj);
                });
                newActivities.push($scope.Activity);

                $scope.Activities = newActivities;*/
                
                $location.path("/dashboard");
                //GetActivityByUser();
                //$scope.Activities.push($scope.Activity);// = new Array();

                
                
                //write code here to send data for activity.
               // debugger;
               $scope.$broadcast("activityChanged");
                

            }).error(function (data, status) {
                $scope.ErrorMessage = status;
            });
        }

        $scope.submitNewActivityInline = function () {
            $scope.EditActivity = "";
            $http.post("User/AddNewActivity", $scope.Activity).
            success(function (data, status) {
                debugger;
                /*var newActivities = [];
                // alert(data.ErrorMessage);
                angular.forEach($scope.Activities, function (obj) {
                    newActivities.push(obj);
                });
                newActivities.push($scope.Activity);

                $scope.Activities = newActivities;*/
                $route.reload();
                //$location.path("/dashboard");
                //GetActivityByUser();
                //$scope.Activities.push($scope.Activity);// = new Array();



                //write code here to send data for activity.
                // debugger;
                $scope.$broadcast("activityChanged");


            }).error(function (data, status) {
                $scope.ErrorMessage = status;
            });
        }
        $scope.ShowEdit = function (objActivity) {
            debugger;
            //alert(objActivity);
            $scope.editrow = true;
            // find the item from the list..
            angular.forEach($scope.Activities, function (activity) {
                //iterate it and find the model
                //load the model into the edit view.
                if (activity.ID == objActivity.ID)
                {
                    $scope.EditActivity = objActivity;
                    //send the object to the mvc controller for updation..
                    $http.post("User/AddNewActivity", objActivity).
                    success(function (data, status) {
                    debugger;
                // alert(data.ErrorMessage);
                        $scope.Activities.push($scope.Activity);// = new Array();

                        //$location.path("/dashboard");

                //write code here to send data for activity.
                // debugger;
                //$scope.$broadcast("activityChanged");


            }).error(function (data, status) {
                $scope.ErrorMessage = status;
            });
                    //-- Edit of Edit 
                    $scope.editrow = false;
        //            $location.path('/AddActivity/');
                }
            });
            //$scope.$apply();
            //return $scope.editrow;
            //alert("edit");
        }
        $scope.getActivities = function () {

            $http.post("User/GetActivities").
            success(function (data, status) {
                debugger;
                // alert(data.ErrorMessage);

                //write code here to send data for activity.


            }).error(function (data, status) {
                $scope.ErrorMessage = status;
            });
        }
        $scope.getPartials = function (path) {
            debugger;
            if ($location.url() == path) {
                
                return true;
            }
            else {
                return false;
            }
        }
        $scope.CancelActivity = function () {
            $location.path('/dashboard');
        }

        

        //$locationProvider.html5Mode(true).hashPrefix('!');
       /* $scope.submitLogin = function () {

            $http.post("User/UserAuthentication", $scope.login).
            success(function (data, status) {

                // alert(data.ErrorMessage);

                $scope.ErrorMessage = (data.ErrorMessage == undefined ? "" : data.ErrorMessage);
                $scope.SuccessMessage = data.UserName;
                if (data.ErrorMessage == undefined) {
                    debugger;
                    $location.path("/dashboard");
                }

            }).error(function (data, status) {
                $scope.ErrorMessage = status;
            });
        }*/
        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
        
    }];
});