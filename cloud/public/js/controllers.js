'use strict';

/* Controllers */

myApp.controller('AppCtrl', function ($scope, $http) {

    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function (data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });

  });
  myApp.controller('MyCtrl1', function ($scope) {
    // write Ctrl here

  });
  myApp.controller('MyCtrl2', function ($scope) {
    // write Ctrl here

  });
