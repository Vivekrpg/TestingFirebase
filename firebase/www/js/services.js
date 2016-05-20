angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

.factory('Levels', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var level_list = [{
    id: 0,
    name: 'Novice',
  }, {
    id: 1,
    name: 'Beginner',
  }, {
    id: 2,
    name: 'Intermediate',
  }, {
    id: 3,
    name: 'Advanced',
  }];

  return {
    all: function() {
      return level_list;
    },
    get: function(levelId) {
      for (var i = 0; i < level_list.length; i++) {
        if (level_list[i].id === parseInt(levelId)) {
          return level_list[i];
        }
      }
      return null;
    }
  };
})

.factory('Sports', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var sports = [{
    id: 0,
    name: 'Badminton',
  }, {
    id: 1,
    name: 'Basketball',
  }, {
    id: 2,
    name: 'Volleyball',
  }, {
    id: 3,
    name: 'Ping-Pong',
  }, {
    id: 4,
    name: 'Tennis',
  }];

  return {
    all: function() {
      return sports;
    },
    remove: function(sport) {
      sports.splice(sports.indexOf(sport), 1);
    },
    get: function(sportId) {
      for (var i = 0; i < sports.length; i++) {
        if (sports[i].id === parseInt(sportId)) {
          return sports[i];
        }
      }
      return null;
    }
  };
});
