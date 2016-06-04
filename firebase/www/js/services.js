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

.factory('Levels', function(FURL, $firebaseArray) {
  var ref = new Firebase(FURL);
  var levels_fact;

  return {
    all: function() {
      //return level_list;
      return $firebaseArray(ref.child('profile/Levels'));
    },
    write_var: function(levels) { 
      levels_fact = levels;
    },
    get_var: function() { 
      return levels_fact;
    },
    get: function(levelId,level_list) {
      for (var i = 0; i < level_list.length; i++) {
        if (parseInt(level_list[i].$id) === parseInt(levelId)) {
          return level_list[i];
        }
      }
      return null;
    }
  };
})

.factory('Sports', function(FURL, $firebaseArray) {
  var ref = new Firebase(FURL);
  var sports_fact;

  return {
    all: function() { 
      /* var ref = new Firebase(FURL);
         var sports1 = [];
         ref.orderByChild("sports").once("value", function(data) { 
            var len = Object.keys(data.val().profile.sports).length;


            console.log("length is equal to " + len);
            for(i=0;i<len;i++) { 
              sports1.push({id:i, name: data.val().profile.sports[i]})
            }
          //console.log(sports1);
         });

      //console.log(sports);
      console.log(sports1);*/
      return $firebaseArray(ref.child('profile/sports'));
    },
    write_var: function(sports) { 
      sports_fact = sports; 
    },
    get_var: function() {
      return sports_fact; 
    },
    remove: function(sport) {
      sports.splice(sports.indexOf(sport), 1); //TODO: this may not work as now we need to run $remove() on firebaseArray. Modify when needed
    },
    get: function(sportId,sports) {
      for (var i = 0; i < sports.length; i++) {
        if (parseInt(sports[i].$id) === parseInt(sportId)) {
          return sports[i]; //returning object instead of the name 
        }
      }
      return null;
    }
  };
});
