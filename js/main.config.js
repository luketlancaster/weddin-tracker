angular
  .module('WeddingApp')
  .config( function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/attendees.html',
        controller: 'AttendeesCtrl',
        controllerAs: 'attendees'
      })
      .when('/money', {
        templateUrl: 'templates/money.html',
        controller: 'MoneyCtrl',
        controllerAs: 'money'
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
