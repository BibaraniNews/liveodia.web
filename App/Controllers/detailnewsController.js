'use strict';
LiveOdiaApp.controller('detailnewsController', ['$scope', '$routeParams', 'detailnewsServiceFactory', function ($scope, $routeParams, detailnewsServiceFactory) {
    $scope.message = "Welcome to detail view page";
    $scope.detailNews = [];
    $scope.newsid = $routeParams.id;
    $scope.NextNews= function (newsid) {

    }
    $scope.GetDetailNews = function () {
        detailnewsServiceFactory.getDetailNews($scope.newsid).then(function (dnewsdata) {
            if (dnewsdata) {
                $scope.detailNews = dnewsdata;
            };
        });
    };
    $scope.GetDetailNews();
}]);