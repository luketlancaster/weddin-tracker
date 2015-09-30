angular
  .module('WeddingApp')
  .controller('TodosCtrl', TodosCtrl);

function TodosCtrl(DataFactory) {
  var vm = this;
  vm.todos = DataFactory.getTodos();
  vm.todo = '';

  vm.save = function() {
    var todoRef = new Firebase('https://weddin.firebaseio.com/todos');
    todoRef.push(vm.todo)
    vm.todo = '';
  }
}
