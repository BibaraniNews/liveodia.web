'use strict';
LiveOdiaApp.factory('HotnewsServiceFactory', ['$http', '$q', function ($http, $q) {
    debugger;
    var baseService = "http://www.liveodia.co/";
    //var baseService = "http://localhost:6996/";
    //var baseService = "http://192.168.1.10:8042/";
//    var baseService = "http://192.168.1.6:3321/";
    var HotnewsServiceFactory = {};

    var _getHotFullNews = function (hnid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/Home/' + hnid).success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        })
        return deffer.promise;
    };

    var _getHotFullNewsTitle = function () {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/HotNews').success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        })
        return deffer.promise;
    }

    var _getHotNewsSummary = function (hnid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/HnewsSummary/' + hnid).success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        })
        return deffer.promise;
    };

    var _getHotNews = function (hnid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/home/' + hnid).success(function (data, status) {
            deffer.resolve(data);
        }).error(function (err, status) {
            deffer.reject(err);
        })
        return deffer.promise;
    };

    HotnewsServiceFactory.getHotFullNews = _getHotFullNews;
    HotnewsServiceFactory.getHotFullNewsTitle = _getHotFullNewsTitle;
    HotnewsServiceFactory.getHotNewsSummary = _getHotNewsSummary;
    HotnewsServiceFactory.getHotNews = _getHotNews;
    return HotnewsServiceFactory;
}]);