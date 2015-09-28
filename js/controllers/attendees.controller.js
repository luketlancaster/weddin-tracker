angular
  .module('WeddingApp')
  .controller('AttendeesCtrl', AttendeesCtrl)

function AttendeesCtrl(DataFactory) {
  var vm = this;
  var ref = new Firebase('https://weddin.firebaseio.com/attendees');

  vm.title = "Wedding App Here!";
  vm.total;
  vm.tableView = false;
  vm.cardView = true;

  vm.peoples = DataFactory.getFolks();

  vm.calculate = function() {
    vm.total = 0;
    angular.forEach(vm.peoples, function(person) {
      if (person.attending.includes("Yes") || person.attending.includes("yes") || person.attending.includes("YES")) {
        vm.total += parseInt(person.number, 10);
      }
    });
  };

}
