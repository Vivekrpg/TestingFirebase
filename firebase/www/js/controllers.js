angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('VideoCtrl', function($scope, $firebaseArray, Sports) {
  $scope.sports = Sports.all();
  $scope.sports.$loaded().then(function() {  
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
  Sports.write_var($scope.sports);
  $scope.remove = function(sport) { 
    Sports.remove(sport);
  };
})

.controller('levelCtrl', function($scope, $stateParams, Levels, Sports) {
  $scope.level_list = Levels.all();
  $scope.level_list.$loaded().then(function() { 
  })
  .catch(function(error) { 
    console.log("Error:", error);
  });
  Levels.write_var($scope.level_list);
  $scope.sports = Sports.get_var();
  $scope.sport = Sports.get($stateParams.sportid,$scope.sports);
})

.controller('videolistCtrl', function($scope,$stateParams,Levels, Sports) {
  $scope.sports = Sports.get_var();
  $scope.levels = Levels.get_var();
  $scope.sport = Sports.get($stateParams.sportid,$scope.sports);
  $scope.level = Levels.get($stateParams.levelid, $scope.levels);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, $location, Auth, FURL, Utils) {
  $scope.settings = {
    enableFriends: true
  };
   
  $scope.logOut = function () { 
    Auth.logout();
    $location.path("/login")
  }
});

