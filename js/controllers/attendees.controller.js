angular
  .module('WeddingApp')
  .controller('AttendeesCtrl', AttendeesCtrl);

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

function AttendeesCtrl(DataFactory) {
  var vm = this;
  var key = 'yesiamsure';
  var ref = new Firebase('https://weddin.firebaseio.com/attendees');

  vm.title = "Wedding App Here!";
  vm.total = 0;
  vm.tableView = false;
  vm.cardView = true;
  vm.showButton = false;
  vm.sortType = 'name';
  vm.sortReverse = false;

  vm.peoples = DataFactory.getFolks();

  vm.peoples.$loaded(function() {
    vm.total = 0;
    angular.forEach(vm.peoples, function(person) {
      if (!person.number) {
        person.number = 0;
      }
      vm.total += parseInt(person.number, 10);
    });
  });

  vm.remove = function(peopleId) {
    var answer = prompt("Are you really sure?!");
    if (answer === key) {
      ref.child(peopleId).remove();
    }
  };

}
