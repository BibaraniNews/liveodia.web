'use strict';
LiveOdiaApp.controller('detailHotnewsController', ['$scope', '$rootScope', '$location', '$routeParams', 'HotnewsServiceFactory', 'sharedService', function ($scope, $rootScope, $location, $routeParams, HotnewsServiceFactory, sharedService) {
    debugger;
    $scope.newsid = $routeParams.id;
    $scope.viewActive = $rootScope.hideit;
    $scope.hnewsDetail = [];
    $scope.hnewsTitle = [];

    $scope.getHotNewsSummary = function () {
        debugger;
        HotnewsServiceFactory.getHotNewsSummary($scope.newsid).then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsDetail = hnewsdata;
            };
        })
    };

    $scope.getHotNewsTitle = function () {
        debugger;
        HotnewsServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsTitle = hnewsdata;
            };
        })
    };

    $scope.getHDetailNews = function (hid) {
        debugger;
        sharedService.getHotDetailNews(hid);
        $location.path('/detailhotnews');
    };
    $scope.getHotNewsTitle();
    $scope.getHotNewsSummary();
}]);