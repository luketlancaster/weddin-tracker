angular
  .module('WeddingApp')
  .controller('AttendeesCtrl', AttendeesCtrl)

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

function AttendeesCtrl(DataFactory) {
  var vm = this;
  var ref = new Firebase('https://weddin.firebaseio.com/attendees');

  vm.title = "Wedding App Here!";
  vm.total;
  vm.tableView = false;
  vm.cardView = true;

  vm.peoples = DataFactory.getFolks();

  vm.peoples.$loaded(function() {
    vm.total = 0;
    angular.forEach(vm.peoples, function(person) {
      if (person.attending.includes("Yes") || person.attending.includes("yes") || person.attending.includes("YES")) {
        vm.total += parseInt(person.number, 10);
      }
    });
  })
}
