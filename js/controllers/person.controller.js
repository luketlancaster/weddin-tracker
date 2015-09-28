angular
  .module('WeddingApp')
  .run(function(DataFactory) {
    console.log(DataFactory);
  })
  .controller('PersonCtrl', PersonCtrl)

function PersonCtrl($routeParams, DataFactory) {
  var vm = this;
  vm.individual = DataFactory.getFolk($routeParams.id);
}
