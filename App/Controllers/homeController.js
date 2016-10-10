'use strict';
LiveOdiaApp.controller('homeController', ['$scope', '$rootScope', '$location', '$anchorScroll', '$route', '$routeParams', 'homeServiceFactory', 'HotnewsServiceFactory', 'mobileCheck', function ($scope, $rootScope, $location, $anchorScroll, $route, $routeParams,homeServiceFactory, HotnewsServiceFactory, mobileCheck) {
    debugger;
    $scope.mobile = mobileCheck;
    $scope.hotNews = [];
    $scope.topstories = [];
    $scope.newsories = [];
    $scope.filteredNews = [];
    $scope.currentPage = 1;
    $scope.numPerPage = 10;
    $scope.maxSize = 5;
    $scope.fullnews = [];
    $scope.cleanData = [];
    $scope.topnews = [];
    $scope.hotnews = [];
    $scope.newstory = [];

    $scope.tpnews = false;
    $scope.hnews = false;
    $scope.nstory = false;

    $scope.order_item = "priority";
    $scope.order_reverse = false;

    //$scope.FormatData = function () {
    //    debugger;
    //    $scope.fullnews.push($scope.fnews);
    //    var clean = pruneEmpty($scope.fullnews);
    //    $scope.cleanData = clean;
    //    $scope.topnews = _.filter($scope.cleanData[0].fullnews, "topnews");
    //    $scope.newstory = _.filter($scope.cleanData[0].fullnews, "newstory");
    //    $scope.hotnews = _.filter($scope.cleanData[0].fullnews, "hotnews");
    //};

    //function pruneEmpty(obj) {
    //    return function prune(current) {
    //        _.forOwn(current, function (value, key) {
    //            if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
    //              (_.isString(value) && _.isEmpty(value)) || _.includes(value, 0) ||
    //              (_.isObject(value) && _.isEmpty(prune(value)))) {
    //                delete current[key];
    //            }
    //        });
    //        if (_.isArray(current)) _.pull(current, undefined);
    //        return current;

    //    }(_.cloneDeep(obj));
    //};

    if ($scope.mobile) {
        debugger;
        $location.hash('middle');
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    }

    //$scope.$watch('currentPage + numPerPage', function () {
    //    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    //    , end = begin + $scope.numPerPage;

    //    $scope.filteredNews = $scope.newsories.slice(begin, end);
    //});

    $scope.getAllNews = function () {
        homeServiceFactory.getAllNews().then(function (newsData) {
            debugger;
            if (newsData) {
                $scope.fullnews = newsData;
                angular.forEach($scope.fullnews, function (value, key) {
                    $scope.topstories.push({ "title": value.ttitle, "topnews": value.topnews, "newsid": value.tnid, "imgurl": value.timageurl, "tsub": value.tsub, "newsdate": value.newsdate });
                });
                $scope.getHotNewsTitle();
            }
        });

        homeServiceFactory.getAllNewsStory().then(function (newsData) {
            debugger;
            if (newsData) {
                $scope.nstory = true;
                $scope.newstory = newsData;
                //angular.forEach($scope.fullnews, function (value, key) {
                //    $scope.topstories.push({ "title": value.ttitle, "topnews": value.topnews, "newsid": value.tnid, "imgurl": value.timageurl, "tsub": value.tsub, "newsdate": value.newsdate });
                //});
            }
        });

    };

    $scope.getTopNewsByID = function (newsid) {
        debugger;
        homeServiceFactory.getTopNewsByID(newsid).then(function (result) {
            if (result) {
                $scope.tpnews = true;
                $scope.hnews = false;
                $scope.nstory = false;
                $scope.tnews = result;
            }
        });
    };


    $scope.getHotNewsTitle = function () {
        debugger;
        HotnewsServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hotNews = hnewsdata;
            };
        })
    };

    $scope.getHotFullNews = function (hnid) {
        debugger;
        homeServiceFactory.getHotFullNews(hnid).then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.tpnews = false;
                $scope.nstory = false;
                $scope.hnews = true;
                $scope.hnewsDetail = hnewsdata;
            };
        })
    };

    $scope.getAllNews();
    //$scope.FormatData();
}]);
//}]).filter('orderObjectBy', function () {
//    return function (items, field, reverse) {
//        var filtered = [];
//        angular.forEach(items, function (item) {
//            filtered.push(item);
//        });
//        if (items[0].newstory) {
//            filtered.sort(function (a, b) {
//                return (a.newstory[field] > b.newstory[field] ? 1 : -1);
//            });
//        }
//        if (items[0].topnews) {
//            filtered.sort(function (a, b) {
//                return (a.topnews[field] > b.topnews[field] ? 1 : -1);
//            });
//        }
//        //if (items.topnews) {//For hot News
//        //    filtered.sort(function (a, b) {
//        //        return (a.topnews[field] > b.topnews[field] ? 1 : -1);
//        //    });
//        //}
//        if (reverse) filtered.reverse();
//        return filtered;
//    };
//});