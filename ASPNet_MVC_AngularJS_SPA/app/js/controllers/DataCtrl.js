define([], function () {
    return ['$route','$location', '$scope', '$http', function ($route,$location, $scope, $http) {
        // You can access the scope of the controller from here
        // on load call api method to get login information.
        // 
        debugger;
        $scope.ActivityData = new Array();
        $scope.ActivityData.push({ name: "baly", data:[4.0] });
        	$scope.ActivityData.push({ name: "daman", data:[3] });
        //$scope.ActivityData.push({name: 'daman', data:[1]});
        $scope.$apply();
        
    }];
});