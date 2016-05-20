angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('VideoCtrl', function($scope, Sports) {
  $scope.sports = Sports.all();
  $scope.remove = function(sport) { 
    Sports.remove(sport);
  };
})

.controller('levelCtrl', function($scope, $stateParams, Levels, Sports) {
  $scope.level_list = Levels.all();
  $scope.sport = Sports.get($stateParams.sportid)
})

.controller('videolistCtrl', function($scope,$stateParams,Levels, Sports) {
  $scope.sport = Sports.get($stateParams.sportid)
  $scope.level = Levels.get($stateParams.levelid)
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

