
describe("Unit Test Suite for accion lab ascending descending order table", function () {
	var $controller, $rootScope, myMethod, $httpBackend;
	beforeEach(module('accionlab'));

	beforeEach(inject(function (_$controller_, _$rootScope_, _mymethod_, _$httpBackend_) {
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		myMethod = _mymethod_;
		$httpBackend = _$httpBackend_;
	}));

	describe('Define sorting', function () {
		it('It should have a method defined sorting to sort the posts based on type and order', function () {
			var $scope = $rootScope.$new();
			var controller = $controller('jschallengeController', { $scope: $scope });
			expect($scope.sorting).toBeDefined();
		});

		it('It should have a method sorting which set ', function () {
			var $scope = $rootScope.$new();
			var controller = $controller('jschallengeController', { $scope: $scope });
			var sortBy = 'title';
			$scope.directionFlag = false;
			$scope.sorting(sortBy);
			expect($scope.sorting).toBeDefined();
			expect($scope.firstSelect).toBe(sortBy);
			expect($scope.sortByWhat).toBe(sortBy);
			expect($scope.directionFlag).toBeTruthy();
		});

		it('It should have a service injected myFactory', function () {
			expect(myMethod).toBeDefined();
			expect(myMethod.addlist).toBeDefined();
			$httpBackend.expectGET('http://jsonplaceholder.typicode.com/posts').respond(angular.toJson(
				[{ "userId": 1, "id": 1, "title": "Title", "body": "Test desc 1" },
				{ "userId": 1, "id": 2, "title": "Title", "body": "Test desc 2" }]
			));
			myMethod.addlist(function (response) {
				expect(response.data).toBeDefined();
				expect(response.data.length).toEqual(2);
			});
			$httpBackend.flush();
		})

	})

});