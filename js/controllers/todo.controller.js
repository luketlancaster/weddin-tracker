angular
  .module('WeddingApp')
  .controller('TodosCtrl', TodosCtrl);

function TodosCtrl(DataFactory, $scope) {
  var vm = this;
  var firebaseRef = new Firebase('https://weddin.firebaseio.com');
  vm.todos = DataFactory.getTodos();
  vm.finished = DataFactory.getFinished();
  vm.todo = '';

  vm.todos.$bindTo($scope, "data");

  vm.save = function() {
    var todoRef = new Firebase('https://weddin.firebaseio.com/todos');
    todoRef.push(vm.todo)
    vm.todo = '';
  }

  vm.remove = function(key, todo) {
    delete $scope.data[key];
    firebaseRef.child('finished').push(todo);
  }
}
