describe("Controller: MainCtrl", function(){
	'use strict';

	var MainCtrl, 
		scope;


	beforeEach(module('myApp'));


	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		MainCtrl = $controller('MainCtrl', {
			$scope : scope
		});
	}));


	it('should create a UserList model with 2 users', function() {
		expect(scope.userList.length).toBe(2);
	});


	describe("NewMessage", function(){
		it("should return a new message", function() {
			var m = newMessage ("Someone", "SomethingToSay");
			expect(m.sender).toEqual("Someone");
			expect(m.messageContent).toEqual("SomethingToSay");
		});
	});

	describe("SendMessage", function(){

		it('should add new messages to users message lists', function() {
			var m1 = scope.sendMessage ("Someone", "SomethingToSay");
			expect(scope.userList[0].messageList.length).toBe(1);
			expect(scope.userList[1].messageList.length).toBe(1);
			var m2 = scope.sendMessage ("SomeoneElse", "SomethingElseToSay");
			expect(scope.userList[0].messageList.length).toBe(2);
			expect(scope.userList[1].messageList.length).toBe(2);
		});
	});

});
