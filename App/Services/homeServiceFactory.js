'use strict';
LiveOdiaApp.factory('homeServiceFactory', ['$http', '$q', function ($http, $q) {
    debugger;
    var baseService = "http://localhost:59485/";
    var homeServiceFactory = {};
    var _getAllNews = function () {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/home').success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        });
        return deffer.promise;
    };

    var _getAllNewsStory = function () {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/NewStory').success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        });
        return deffer.promise;
    };


    var _getTopNewsByID = function (nid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/home/' + nid).success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        })

        return deffer.promise;
    };

    var _getHotFullNews = function (hnid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/HotNews/' + hnid).success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        })
        return deffer.promise;
    };

    homeServiceFactory.getAllNewsStory = _getAllNewsStory;
    homeServiceFactory.getAllNews = _getAllNews;
    homeServiceFactory.getTopNewsByID = _getTopNewsByID;
    homeServiceFactory.getHotFullNews = _getHotFullNews;

    return homeServiceFactory;
}]);