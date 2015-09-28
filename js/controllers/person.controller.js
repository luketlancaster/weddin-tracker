angular
  .module('WeddingApp')
  .controller('PersonCtrl', PersonCtrl);

function PersonCtrl($routeParams, DataFactory) {
  var vm = this;
  vm.individual = DataFactory.getFolk($routeParams.id);
}
