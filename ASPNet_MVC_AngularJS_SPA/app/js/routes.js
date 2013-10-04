define(['angular', 'app'], function(angular, app) {
	'use strict';

	return app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view1', {
			templateUrl: 'app/partials/partial1.html',
			controller: 'MyCtrl1'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'app/partials/partial2.html',
			controller: 'MyCtrl2'
		});
		$routeProvider.when('/home', {
		    templateUrl: 'app/partials/header.html',
		    controller: 'HomeCtrl'

		});
		$routeProvider.when('/login', {
		    templateUrl: 'app/partials/login.html',
		    controller: 'HomeCtrl'

		});
		$routeProvider.when('/dashboard', {
		    templateUrl: 'app/partials/Dashboard.html',
		    controller: 'DashboardCtrl'

		});
		$routeProvider.when('/AddActivity', {
		    templateUrl: 'app/partials/Dashboard.html',
		    controller: 'DashboardCtrl'

		});
		$routeProvider.when('/DataChart', {
		    templateUrl: 'app/partials/Chart.html',
		    controller: 'DataCtrl'

		});
		$routeProvider.when('/Files', {
		    templateUrl: 'app/partials/fileupload.html',
		    controller: 'FileUploadCtrl'

		});
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

});