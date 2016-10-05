'use strict';
LiveOdiaApp.controller('hotnewsController', ['$scope', '$rootScope', '$location', '$routeParams', 'HotnewsServiceFactory', 'sharedService', function ($scope, $rootScope, $location, $routeParams, HotnewsServiceFactory, sharedService) {
    debugger;
    $scope.newsid = $routeParams.id;
    $scope.viewActive = $rootScope.hideit;
    $scope.hfnewsDetail = [];
    $scope.hnewsDetail = [];

    $scope.getHotFullNewsTitle = function () {
        debugger;
        HotnewsServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsDetail = hnewsdata;
                $scope.getHDetailNews();
            };
        });
    };

    //$scope.getHotNewsDetail= function (hid) {
    //    debugger;
    //    sharedService.getHotDetailNews(hid);
    //    $scope.getHDetailNews();
    //};

    $scope.getHDetailNews = function () {
        debugger;
        //var hnid = sharedService.broadcastHdetailNews();
        HotnewsServiceFactory.getHotNews($scope.newsid).then(function (hfullnews) {
            if (hfullnews) {
                $scope.hfnewsDetail = hfullnews;
            }
        });
    };
    $scope.getHotFullNewsTitle();
    

}]);