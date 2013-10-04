define(['angular', 'services'], function(angular, services) {
	'use strict';

	angular.module('myApp.directives', ['myApp.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
			};
			
	}]);

	 angular.module('myApp.directives')
	  .directive('upload', ['uploadManager', function factory(uploadManager){
	  	// Runs during compile
	  	return {
	  		// name: '',
	  		// priority: 1,
	  		// terminal: true,
	  		// scope: {}, // {} = isolate, true = child, false/undefined = no change
	  		// cont­rol­ler: function($scope, $element, $attrs, $transclue) {},
	  		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
	  		 restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
	  		// template: '',
	  		// templateUrl: '',
	  		// replace: true,
	  		// transclude: true,
	  		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	  		link: function($scope, iElm, iAttrs, controller) {
	  			$(element).fileupload({

	  				dataType: 'text',
	  				add:function(e, data){
	  					uploadManager.add(data);
	  				},
	  				progressall: function(e, data){
	  					var progress= parseInt(data.loaded / data.total * 100,10);
	  					uploadManager.setProgress(progress);
	  				},
	  				done: function(e, data){
	  					uploadManager.setProgress(0);
	  				}
	  			});
	  		}
	  	};
	  }]);

});