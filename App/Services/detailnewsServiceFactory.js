'use strict';
LiveOdiaApp.factory('detailnewsServiceFactory', ['$http', '$q', function ($http, $q) {
    debugger;
    //var baseService = "http://localhost:3320/";
    //var baseService = "http://192.168.1.6:3321/";
    //var baseService = "http://localhost:6996/";
    var baseService = "http://192.168.1.10:8042/";
    var detailnewsServiceFactory = {};
    var _getDetailNews = function (id) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/Fullnews/' + id).success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        });
        return deffer.promise;
    };

    var _getFullNews = function (nid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/Fullnews/' + nid).success(function (data, status) {
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
        $http.get(baseService + 'api/Test' + hnid).success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        })

        return deffer.promise;
    };

    detailnewsServiceFactory.getDetailNews = _getDetailNews;
    detailnewsServiceFactory.getFullNews = _getFullNews;
    detailnewsServiceFactory.getHotFullNews = _getHotFullNews;

    return detailnewsServiceFactory;
}]);