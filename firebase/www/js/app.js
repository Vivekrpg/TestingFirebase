'Use Strict';
angular.module('App', ['ionic','ngStorage', 'ngCordova','firebase','ngMessages','starter.controllers','starter.services'])
.config(function($stateProvider, $urlRouterProvider) {
$stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login/login.html',
      controller:'loginController'
    })
    .state('forgot', {
      url: '/forgot',
      templateUrl: 'views/forgot/forgot.html',
      controller:'forgotController'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register/register.html',
      controller:'registerController'
    })
    /*.state('home', {
      url: '/home',
      templateUrl: 'views/home/home.html',
      controller:'homeController'
    })*/
    .state('home', {
      url: '/home',
      //templateUrl: 'views/templates/tab-dash.html',
      templateUrl: 'views/home/tabs.html',
      controller: 'DashCtrl',
    })
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'views/templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'views/templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'views/templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'views/templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        //templateUrl: 'views/home/home.html',
        templateUrl: 'views/templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  })

  .state('tab.video', {
    url: '/video',
    views: {
      'tab-video': {
        templateUrl: 'views/templates/tab-video.html',
        controller: 'VideoCtrl'
      }
    }
  })
    .state('tab.level', {
      url: '/video/:sportid',
      views: {
        'tab-video': {
          templateUrl: 'views/templates/tab-level.html',
          controller: 'levelCtrl'
        }
      }
    })
      .state('tab.videolist', {
        url: '/video/:sportid/:levelid',
        views: {
          'tab-video': {
            templateUrl: 'views/templates/tab-videolist.html',
            controller: 'videolistCtrl'
          }
        }
      });

$urlRouterProvider.otherwise("/login");
})
// Changue this for your Firebase App URL.
.constant('FURL', 'https://radiant-fire-7873.firebaseio.com')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
