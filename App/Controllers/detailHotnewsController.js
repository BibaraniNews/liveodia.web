'use strict';
LiveOdiaApp.controller('detailHotnewsController', ['$scope', '$rootScope', '$location', '$routeParams', 'HotnewsServiceFactory', 'sharedService', 'homeServiceFactory', function ($scope, $rootScope, $location, $routeParams, HotnewsServiceFactory, sharedService, homeServiceFactory) {
    debugger;
    $scope.newsid = $routeParams.id;
    $scope.viewActive = $rootScope.hideit;
    $scope.hnewsDetail = [];
    $scope.hnewsTitle = [];
    $scope.hotnews = [];
    $scope.topstories = [];
    $scope.hnews = false;
    $scope.hnewssummary = false;
    $scope.tpnews = false;

    $scope.getAllTopNews = function () {
        HotnewsServiceFactory.getAllTopNews().then(function (newsData) {
            debugger;
            if (newsData) {
                $scope.topstories = [];
                $scope.fullnews = newsData;
                angular.forEach($scope.fullnews, function (value, key) {
                    $scope.topstories.push({ "title": value.ttitle, "topnews": value.topnews, "newsid": value.tnid, "imgurl": value.timageurl, "tsub": value.tsub, "newsdate": value.newsdate });
                });
            }
        });
    };


    $scope.getHotNewsSummary = function () {
        debugger;
        HotnewsServiceFactory.getHotNewsSummary($scope.newsid).then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsDetail = [];
                $scope.hnewssummary = true;
                $scope.hnews = false;
                $scope.tpnews = false;
                $scope.hnewsDetail = hnewsdata;
                $scope.getHotNewsTitle();
                $scope.getAllTopNews();
            };
        })
    };

    $scope.getHotNewsTitle = function () {
        debugger;
        HotnewsServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsTitle = [];
                $scope.hnewsTitle = hnewsdata;

            };
        })
    };


    $scope.getTopNewsByID = function (newsid) {
        debugger;
        homeServiceFactory.getTopNewsByID(newsid).then(function (result) {
            if (result) {
                $scope.tpnews = true;
                $scope.hnews = false;
                $scope.hnewssummary = [];
                $scope.hnewssummary = false;
                $scope.tnews = result;
            }
        });
    };

    $scope.getHopNewsByID = function (newsid) {
        debugger;
        HotnewsServiceFactory.getHotNewsSummary(newsid).then(function (result) {
            if (result) {
                $scope.hnews = true;
                $scope.tpnews = false;
                $scope.hnewssummary = [];
                $scope.hnewssummary = false;
                $scope.hotnews = result;
            }
        });
    };


    $scope.getHDetailNews = function (hid) {
        debugger;
        sharedService.getHotDetailNews(hid);
        $location.path('/detailhotnews');
    };

    $scope.getHotNewsSummary();
}]);