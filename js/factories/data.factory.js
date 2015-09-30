angular
  .module('WeddingApp')
  .factory('DataFactory', DataFactory);

function DataFactory($firebaseArray, $firebaseObject) {
  var ref = new Firebase('https://weddin.firebaseio.com/attendees');
  var folks = $firebaseArray(ref);

  return {
    getFolks: function() {
      return folks;
    },
    getFolk: function(id) {
      var ref = new Firebase('https://weddin.firebaseio.com/attendees/' + id);
      person = $firebaseObject(ref);
      return person;
    },
    getTodos: function() {
      var ref = new Firebase('https://weddin.firebaseio.com/todos')
      todos = $firebaseArray(ref);
      return todos;
    },
    saveTodos: function(todo) {
      var ref = new Firebase('https://weddin.firebaseio.com/todos')
      ref.push(todo);
    }
  };
}
