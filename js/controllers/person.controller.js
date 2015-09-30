angular
  .module('WeddingApp')
  .controller('PersonCtrl', PersonCtrl);

function PersonCtrl($scope, $routeParams, DataFactory) {
  var vm = this;
  vm.individual = DataFactory.getFolk($routeParams.id);

  vm.note = '';

  vm.individual.$bindTo($scope, "data");

  vm.saveNote = function() {
    var attendee = new Firebase('https://weddin.firebaseio.com/attendees/' + $routeParams.id + '/notes');
    attendee.push(vm.note);
    vm.note = '';
  }

  vm.remove = function(note) {
    delete $scope.data.notes[note];
  }

}
