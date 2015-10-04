angular
  .module('WeddingApp')
  .controller('MoneyCtrl', MoneyCtrl)

if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}

function MoneyCtrl(DataFactory) {
  var vm = this;
  var peoples = DataFactory.getFolks();
  vm.foodCost = 0;
  vm.chairsCost = 0;
  var total = 0;

  vm.title = "Money app here!"

  peoples.$loaded(function() {

    angular.forEach(peoples, function(person) {
      if (!person.number) {
        person.number = 0;
      }
      total += parseInt(person.number);
    });
    if (vm.foodCost === 0) {
      vm.foodCost = Math.round(total * 17.33);
      vm.chairsCost = total * 1.75;
      vm.tables = total / 8;
      vm.tableCost = vm.tables * 8;
      vm.total = vm.foodCost + vm.chairsCost + vm.tableCost;
    }
  });
}
