'use strict';
LiveOdiaApp.controller('detailnewsController', ['$scope', '$routeParams', 'detailnewsServiceFactory', 'HotnewsServiceFactory', 'homeServiceFactory', function ($scope, $routeParams, detailnewsServiceFactory, HotnewsServiceFactory, homeServiceFactory) {
    debugger;
    $scope.message = "Welcome to detail view page";
    $scope.detailNews = [];
    $scope.newsid = $routeParams.id;
    $scope.hnews = false;
    $scope.hnewssummary = false;
    $scope.tpnews = false;

    $scope.NextNews= function (newsid) {

    }

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


    $scope.getHotNewsSummary = function (nsid) {
        debugger;
        HotnewsServiceFactory.getHotNewsSummary(nsid).then(function (hnewsdata) {
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

    $scope.getHotNewsByID = function (newsid) {
        debugger;
        HotnewsServiceFactory.getHotNewsSummary(newsid).then(function (result) {
            if (result) {
                $scope.hnews = true;
                $scope.tpnews = false;
                $scope.hnewssummary = [];
                $scope.hnewssummary = false;
                $scope.hnewsDetail = result;
            }
        });
    };
    $scope.GetDetailNews = function () {
        detailnewsServiceFactory.getDetailNews($scope.newsid).then(function (dnewsdata) {
            if (dnewsdata) {
                $scope.hnews = true;
                $scope.detailNews = dnewsdata;
                $scope.getHotNewsTitle();
                $scope.getAllTopNews();
            };
        });
    };
    $scope.GetDetailNews();
}]);