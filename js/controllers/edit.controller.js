angular
  .module('WeddingApp')
  .controller('EditCtrl', EditCtrl);

function EditCtrl($scope, $routeParams, DataFactory, $location) {
  var vm = this;
  vm.individual = DataFactory.getFolk($routeParams.id);


  vm.savePerson = function() {
    vm.individual
        .$save()
        .then(function(ref) {
            $location.path('/person/' + vm.individual.$id);
        }, function(error) {
            console.log("It didn't save!!!\n");
            console.log(error);
        });
  };

}
