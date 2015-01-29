describe('MainCtrl', function(){

	beforeEach(module("myApp"));
	var scope,
	controller;

	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		controller = $controller;
	}));

	it('should create a UserList model with 2 users', function() {
		controller("MainCtrl", {$scope: scope});
		expect(scope.userList.length).toBe(2);
	});

	describe('SendMessage', function(){
	it('should add new messages to users message lists', function() {
		controller("MainCtrl", {$scope: scope});
		var m = newMessage ("Someone", "SomethingToSay");
		expect(m.sender).toEqual("SomethingToSay");
	});

	describe('NewMessage', function(){
	it('should return a new message', function() {
		controller("MainCtrl", {$scope: scope});
		var m1 = $scope.sendMessage ("Someone", "SomethingToSay");
		expect($scope.userList[0].messageList.length).toBe(1);
		expect($scope.userList[1].messageList.length).toBe(1);
		var m2 = $scope.sendMessage ("SomeoneElse", "SomethingElseToSay");
		expect($scope.userList[0].messageList.length).toBe(2);
		expect($scope.userList[1].messageList.length).toBe(2);
	});

});
