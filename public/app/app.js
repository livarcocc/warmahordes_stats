angular.module('warmahordes_stats', ['ngResource', 'ngRoute']);

angular.module('warmahordes_stats').config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', { templateUrl: '/views/home.html', controller: 'homeCtrl'});
});

angular.module('warmahordes_stats').controller('homeCtrl', function($scope) {
  $scope.hello = "Hello Angular"
});