angular
  .module('WeddingApp', ['angular.filter', 'ngRoute', 'firebase', 'angular.vertilize'])
  .config( function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/attendees.html',
        controller: 'AttendeesCtrl',
        controllerAs: 'attendees'
      })
      .when('/add', {
        templateUrl: 'templates/add.html',
        controller: 'AddCtrl',
        controllerAs: 'add'
      })
      .when('/money', {
        templateUrl: 'templates/money.html',
        controller: 'MoneyCtrl',
        controllerAs: 'money'
      })
      .when('/todos', {
        templateUrl: 'templates/todos.html',
        controller: 'TodosCtrl',
        controllerAs: 'todos'
      })
      .when('/person/:id', {
        templateUrl: 'templates/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
