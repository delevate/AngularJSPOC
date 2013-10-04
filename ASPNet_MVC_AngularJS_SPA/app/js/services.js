define(['angular'], function (angular) {
	'use strict';
	
	angular.module('myApp.services', [])
		.value('version', '4.5')
		.run(function (){ console.log('Service initialized!!! - from run function inside a module');});
		
});