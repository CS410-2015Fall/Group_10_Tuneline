// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ionic.service.core', 'ngCordova',
                'tunelineCntl','soundbiteCntl','profileCntl','friendsCntl','playlistCntl',
                'tunelineService','profileService','saveService','uploadService',
                'databaseService','youtube-embed',
                'metaDataFormProvider'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Push notification registration
    Ionic.io();
    var push = new Ionic.Push({
      "debug": true
    });

    push.register(function(token) {
      console.log("Device token: ", token.token);
    });
    
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.tuneline', {
    url: '/tuneline',
    views: {
      'tab-tuneline': {
        templateUrl: 'templates/tab-tuneline.html',
        controller: 'TunelineCntl'
      }
    }
  })

  .state('tab.playlist', {
    url: '/playlists',
    views: {
      'tab-tuneline': {
        templateUrl: 'templates/tab-playlists.html',
        controller: 'PlaylistCntl'
      }
    }
  })

  .state('tab.playlists', {
    url: '/playlists/:playlistId',
    views: {
      'tab-tuneline': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCntl'
      }
    }
  })

  .state('tab.soundbite', {
      url: '/soundbite',
      views: {
        'tab-soundbite': {
          templateUrl: 'templates/tab-soundbite.html',
          controller: 'SoundbiteCntl'
        }
      }
    })

  .state('tab.nowplaying', {      
      url: '/tuneline/:soundbiteId',
      views: {
        'tab-tuneline': {
          templateUrl: 'templates/tab-nowplaying.html',
          controller: 'SoundbiteCntl'
        }
      }
    })

  .state('tab.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/tab-profile.html',
        controller: 'ProfileCntl'
      }
    }
  })

  .state('tab.friends', {
    url: '/profile/friends',
    views: {
      'tab-profile': {
        templateUrl: 'templates/friends.html',
        controller: 'FriendsCntl'
      }
    }
  })

  .state('tab.syncTuneline', {
    url: '/profile/friends/:fbId/:fName',
    // url: '/profile/friends/1',
    views: {
      'tab-profile': {
        templateUrl: 'templates/friends-tuneline.html',
        controller: 'FriendsCntl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/soundbite');

});
