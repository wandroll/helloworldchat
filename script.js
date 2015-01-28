
// create the module and name it scotchApp
    // no routes are needed 
var app = angular.module('myApp', []);

// create the controller and inject Angular's $scope
app.controller('MainCtrl', function($scope) {
    $scope.userList = [{
        name:"User A", messageList :[]
    },{
        name:"User B", messageList:[]
    }];


    $scope.sendMessage = function(m, username){
        if (username === "User A" ){
            $scope.userList[0].messageList.push( newMessage ("Moi", m.messageContent));
            $scope.userList[1].messageList.push( newMessage (username, m.messageContent));
        }
        else{
            $scope.userList[1].messageList.push( newMessage ("Moi", m.messageContent));
            $scope.userList[0].messageList.push( newMessage (username, m.messageContent));
        }
    }

    //creates a new message
    function newMessage (sender, messageContent){
        var sendingTime = new Date(),
            sendingTimeFormatted = sendingTime.getHours()+':'+sendingTime.getMinutes()+':'+sendingTime.getSeconds();
        return({sender:sender, messageContent: messageContent, sendingTimeFormatted: sendingTimeFormatted});
    }
});


