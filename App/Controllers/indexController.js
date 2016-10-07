'use strict';
LiveOdiaApp.controller('indexController', ['$scope', '$rootScope', '$location', 'homeServiceFactory', 'loginServiceFactory', function ($scope, $rootScope, $location, homeServiceFactory, loginServiceFactory) {
    debugger;
    $scope.viewActive = $rootScope.hideit;
    //logout 
    $scope.logOut = function () {
        loginServiceFactory.logOut();
        $location.path('/home');
    };
   
    $scope.authentication = loginServiceFactory.authentication;

}]);