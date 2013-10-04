define([], function () {
    return ['$route','$location', '$rootScope', '$scope', '$http','uploadManager', function ($route,$location,$rootScope, $scope, $http,uploadManager) {
        // You can access the scope of the controller from here
        // on load call api method to get login information.
        // 
        debugger;
        $scope.files = new Array();
        $scope.percentage=0;
        //$scope.ActivityData.push({name: 'daman', data:[1]});

        $scope.upload=function(){
            //alert('test');
            debugger;
            
            uploadManager.upload();
            $scope.files=[];
        }

        $rootScope.$on('uploadProgress', function(e, call){
            $scope.percentage=call;


        });

        $scope.$apply();

        
    }];
});