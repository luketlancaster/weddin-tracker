angular
  .module('WeddingApp')
  .controller('MoneyCtrl', MoneyCtrl)

function MoneyCtrl(DataFactory) {
  var vm = this;
  var peoples = DataFactory.getFolks();
  vm.foodCost = 0;
  vm.chairsCost = 0;
  var total = 0;

  vm.title = "Money app here!"

  vm.calculate = function() {
    angular.forEach(peoples, function(person) {
      if (person.attending.includes("Yes") || person.attending.includes("yes") || person.attending.includes("YES")) {
        total += parseInt(person.number);
      }
    });
    if (vm.foodCost === 0) {
      vm.foodCost = Math.round(total * 17.33);
      vm.chairsCost = total * 1.75;
    }
  };
}
