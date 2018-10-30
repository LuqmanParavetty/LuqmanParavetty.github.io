(function(angular) {
	'use strict';
	var app = angular.module('accionlab', []);
	
	app.config(function($httpProvider) {
	  $httpProvider.defaults.useXDomain = true;
	  delete $httpProvider.defaults.headers.common['X-Requested-With'];
	});
	
	app.factory('mymethod', function($http){
		delete $http.defaults.headers.common['X-Requested-With'];
		return {
			addlist: function(callback){
				
				
				return $http({
					method: 'GET',
					url: 'http://jsonplaceholder.typicode.com/posts',
					dataType: 'jsonp',
					headers: {'Authorization': 'Token token=xxxxYYYYZzzz'}
				}).then(callback);
			}
		};
	});
  
	app.controller('jschallengeController', function($scope, $http, mymethod) {
		mymethod.addlist(function(mymethod) {
		   $scope.directionFlag = false;
           $scope.datas = mymethod.data;
		   $scope.firstSelect = 'id';
		  
        });
		
		$scope.sorting = function(bywhat){
			$scope.firstSelect = bywhat;
			$scope.sortByWhat = bywhat;
			$scope.directionFlag = (bywhat == $scope.firstSelect) ? !$scope.directionFlag : false;
		}
	});	
})(window.angular);
