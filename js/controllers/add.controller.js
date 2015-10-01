angular
  .module('WeddingApp')
  .controller('AddCtrl', AddCtrl);

function AddCtrl() {
  var vm = this;

  vm.newPerson = {}

  vm.save = function() {
    var fb = new Firebase('https://weddin.firebaseio.com/attendees');
    fb.push(vm.newPerson);
    vm.newPerson = {};
  }
}
