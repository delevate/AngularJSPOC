define([], function () {
    return ['$location','$scope', '$http', function ($location, $scope, $http) {
        // You can access the scope of the controller from here
        $scope.ErrorMessage = 'Login using your credentials';
        $scope.displayMessage = 'none';
        $scope.InfoMessage = '';
        $scope.SuccessMessage = 'Dont have account? Please signup';
        //$locationProvider.html5Mode(true).hashPrefix('!');
        $scope.submitLogin = function () {
           
            $http.post("User/UserAuthentication", $scope.login).
            success(function (data, status) {
                debugger;
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
        }

        $scope.submitNewUser = function () {
            // add new user from this function
            $http.post("User/UserSignUp", $scope.User).
           success(function (data, status) {

               // alert(data.ErrorMessage);
               debugger;
               $scope.ErrorMessage = (data.ErrorMessage == undefined ? "" : data.ErrorMessage);
               $scope.SuccessMessage = data.UserName;
               if (data.ErrorMessage == undefined) {
                   debugger;
                   
                   $scope.displayMessage = 'visible';
                   $scope.InfoMessage = "User with username: " + data.UserName + " created successfully.";
               }

           }).error(function (data, status) {
               $scope.ErrorMessage = status;
           });

        }
        // because this has happened asynchroneusly we've missed
        // Angular's initial call to $apply after the controller has been loaded
        // hence we need to explicityly call it at the end of our Controller constructor
        $scope.$apply();
    }];
});