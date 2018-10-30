(function(angular) {
	'use strict';
	var app = angular.module('accionlab', []);
	app.factory('mymethod', function($http){
		return {
			addlist: function(callback){
				$http.get('http://jsonplaceholder.typicode.com/posts').then(callback);
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
