'use strict';
LiveOdiaApp.controller('homeController', ['$scope', '$rootScope', '$location', '$anchorScroll', '$route', 'homeServiceFactory', 'HotnewsServiceFactory', 'mobileCheck', function ($scope, $rootScope, $location, $anchorScroll, $route, homeServiceFactory, HotnewsServiceFactory, mobileCheck) {
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

    $scope.order_item = "priority";
    $scope.order_reverse = false;

    $scope.fnews = {
        "fullnews": [
          {
              "hotnews": {
                  "hnid": 1,
                  "hotnews": "asdfasdf",
                  "title": "asl;dasdjla",
                  "hsub": "adsfjkhasklfkl"
              },
              "topnews": {
                  "tnid": 0,
                  "topnews": null,
                  "title": null,
                  "tsub": null,
                  "tpriority": null
              },
              "newstory": {
                  "nnid": 0,
                  "newstory": null,
                  "title": null,
                  "nsub": null,
                  "priority": null
              }
          }, {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "tnid": 3,
                  "topnews": "Kolkatta",
                  "title": "Kolkatta",
                  "tsub": "Kolkatta",
                  "priority": 5
              },
              "newstory": {
                  "nnid": 0,
                  "newstory": null,
                  "title": null,
                  "nsub": null,
                  "priority": null
              }
          },
          {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "tnid": 4,
                  "topnews": "Odisha",
                  "title": "Odisha",
                  "tsub": "Odisha",
                  "priority": 2
              },
              "newstory": {
                  "nnid": 0,
                  "newstory": null,
                  "title": null,
                  "nsub": null,
                  "priority": null
              }
          }, {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "tnid": 0,
                  "topnews": null,
                  "title": null,
                  "tsub": null,
                  "priority": null
              },
              "newstory": {
                  "nnid": 5,
                  "newstory": "India",
                  "title": "India News",
                  "nsub": "india news Test",
                  "priority": 2
              }
          }, {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "tnid": 1,
                  "topnews": "Bihar",
                  "title": "Bihar",
                  "tsub": "Bihar",
                  "priority": 3
              },
              "newstory": {
                  "nnid": 0,
                  "newstory": null,
                  "title": null,
                  "nsub": null,
                  "priority": null
              }
          }, {
              "hotnews": {
                  "hnid": 0,
                  "hotnews": null,
                  "title": null,
                  "hsub": null
              },
              "topnews": {
                  "tnid": 0,
                  "topnews": null,
                  "title": null,
                  "tsub": null,
                  "priority": null
              },
              "newstory": {
                  "nnid": 1,
                  "newstory": "America",
                  "title": "USA",
                  "nsub": "London",
                  "priority": 1
              }
          }
        ]
    };

    $scope.FormatData = function () {
        debugger;
        $scope.fullnews.push($scope.fnews);
        var clean = pruneEmpty($scope.fullnews);
        $scope.cleanData = clean;
        $scope.topnews = _.filter($scope.cleanData[0].fullnews, "topnews");
        $scope.newstory = _.filter($scope.cleanData[0].fullnews, "newstory");
        $scope.hotnews = _.filter($scope.cleanData[0].fullnews, "hotnews");
    };

    function pruneEmpty(obj) {
        return function prune(current) {
            _.forOwn(current, function (value, key) {
                if (_.isUndefined(value) || _.isNull(value) || _.isNaN(value) ||
                  (_.isString(value) && _.isEmpty(value)) || _.includes(value, 0) ||
                  (_.isObject(value) && _.isEmpty(prune(value)))) {
                    delete current[key];
                }
            });
            if (_.isArray(current)) _.pull(current, undefined);
            return current;

        }(_.cloneDeep(obj));
    };

    if ($scope.mobile) {
        debugger;
        $location.hash('middle');
        $anchorScroll.yOffset = 20;
        $anchorScroll();
    }

    $scope.$watch('currentPage + numPerPage', function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
        , end = begin + $scope.numPerPage;

        $scope.filteredNews = $scope.newsories.slice(begin, end);
    });

    $scope.getAllNews = function () {
        homeServiceFactory.getAllNews().then(function (newsData) {
            debugger;
            if (newsData) {
                //$scope.fullnews = newsData.fullnews;
                //angular.forEach($scope.fullnews, function (value, key) {
                //    if (value.TopNews)
                //        if (value.TopNews.TID != 0)
                //            $scope.topstories.push({ "title": value.TopNews.TITLE, "topnews": value.TopNews.TopNews, "newsid": value.TopNews.TID, "imgurl": value.TopNews.TopImg });
                //    if (value.NewStory)
                //        if (value.NewStory.NSID != 0)
                //            $scope.newsories.push({ "title": value.NewStory.TITLE, "newstory": value.NewStory.NewStory, "newsid": value.NewStory.NSID, "imgurl": value.NewStory.NewImg });
                //});
                $scope.getHotNewsTitle();
            }
        });
    };

    $scope.getHotNewsTitle = function () {
        debugger;
        HotnewsServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hotNews = hnewsdata.HotNewsTitle;
            };
        })
    };

    $scope.getHotFullNews = function (hnid) {
        debugger;
        homeServiceFactory.getHotFullNews(hnid).then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsDetail = hnewsdata;
            };
        })
    };

    $scope.getAllNews();
    $scope.FormatData();

}]).filter('orderObjectBy', function () {
    return function (items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function (item) {
            filtered.push(item);
        });
        if (items[0].newstory) {
            filtered.sort(function (a, b) {
                return (a.newstory[field] > b.newstory[field] ? 1 : -1);
            });
        }
        if (items[0].topnews) {
            filtered.sort(function (a, b) {
                return (a.topnews[field] > b.topnews[field] ? 1 : -1);
            });
        }
        //if (items.topnews) {//For hot News
        //    filtered.sort(function (a, b) {
        //        return (a.topnews[field] > b.topnews[field] ? 1 : -1);
        //    });
        //}
        if (reverse) filtered.reverse();
        return filtered;
    };
});