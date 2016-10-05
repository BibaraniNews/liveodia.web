'use strict';
LiveOdiaApp.factory('homeServiceFactory', ['$http', '$q', function ($http, $q) {
    debugger;
    var baseService = "http://localhost:59485/";
   // var baseService = "http://localhost:6996/";
    //var baseService = "http://192.168.1.10:8042/";
   // var baseService = "http://192.168.1.6:3321/";
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

    //var _getFullNews = function (nid) {
    //    debugger;
    //    var deffer = $q.defer();
    //    $http.get(baseService + 'api/Fullnews/' + nid).success(function (data, status) {
    //        debugger;
    //        deffer.resolve(data);
    //    }).error(function (err, status) {
    //        debugger;
    //        deffer.reject(err);
    //    })

    //    return deffer.promise;
    //};

    var _getHotFullNews = function (hnid) {
        debugger;
        var deffer = $q.defer();
        $http.get(baseService + 'api/Home/' + hnid).success(function (data, status) {
            debugger;
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            deffer.reject(err);
        })

        return deffer.promise;
    };

    homeServiceFactory.getAllNews = _getAllNews;
    //homeServiceFactory.getFullNews = _getFullNews;
    homeServiceFactory.getHotFullNews = _getHotFullNews;

    return homeServiceFactory;
}]);