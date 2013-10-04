define(['angular', 'services'], function (angular) {
	'use strict';

	return angular.module('myApp.controllers', ['myApp.services'])
		// Sample controller where service is being used
		.controller('MyCtrl1', ['$scope', 'version', function ($scope, version) {
			$scope.scopedAppVersion = version;
		}])
		// More involved example where controller is required from an external file
		.controller('HomeCtrl', ['$location','$scope', '$injector', function ($location, $scope, $injector) {
		    
			require(['controllers/HomeCtrl','Services'], function(HomeCtrl,version) {
				// injector method takes an array of modules as the first argument
				// if you want your controller to be able to use components from
				// any of your other modules, make sure you include it together with 'ng'
			    // Furthermore we need to pass on the $scope as it's unique to this controller
			
			    
				$injector.invoke(HomeCtrl, this, {'$scope': $scope});
			});

		}])

    .controller('DashboardCtrl', ['$location', '$scope', '$injector', function ($location, $scope, $injector) {

        require(['controllers/DashboardCtrl', 'Services'], function (DashboardCtrl, version) {
            // injector method takes an array of modules as the first argument
            // if you want your controller to be able to use components from
            // any of your other modules, make sure you include it together with 'ng'
            // Furthermore we need to pass on the $scope as it's unique to this controller


            $injector.invoke(DashboardCtrl, this, { '$scope': $scope });
        });

    }])

     .controller('DataCtrl', ['$location', '$scope', '$injector', function ($location, $scope, $injector) {

        require(['controllers/DataCtrl', 'Services'], function (DataCtrl, version) {
            // injector method takes an array of modules as the first argument
            // if you want your controller to be able to use components from
            // any of your other modules, make sure you include it together with 'ng'
            // Furthermore we need to pass on the $scope as it's unique to this controller


            $injector.invoke(DataCtrl, this, { '$scope': $scope });
        });

    }])
	

     .controller('FileUploadCtrl', ['$location', '$rootScope', '$scope', '$injector', function ($location, $rootScope, $scope, $injector) {

        require(['controllers/FileUploadCtrl', 'uploadManager'], function (FileUploadCtrl, uploadManager) {
            // injector method takes an array of modules as the first argument
            // if you want your controller to be able to use components from
            // any of your other modules, make sure you include it together with 'ng'
            // Furthermore we need to pass on the $scope as it's unique to this controller


            $injector.invoke(FileUploadCtrl, this, { '$scope': $scope });
        });

    }])

});