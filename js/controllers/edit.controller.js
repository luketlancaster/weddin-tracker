angular
  .module('WeddingApp')
  .controller('EditCtrl', EditCtrl);

function EditCtrl($scope, $routeParams, DataFactory) {
  var vm = this;
  vm.individual = DataFactory.getFolk($routeParams.id);

}