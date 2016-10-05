'use strict';
LiveOdiaApp.factory('loginServiceFactory', ['$http', '$q', 'localStorageService', function ($http, $q, localStorageService) {
    debugger;
    var baseService = "http://www.liveodia.co/";
    //var baseService = "http://localhost:6996/";
    //var baseService = "http://192.168.1.10:8042/";
    //var baseService = "http://192.168.1.6:3321/";

    var _authentication = {
        isAuth: false,
        userName: "",
        userRole: ""
    };

    var loginServiceFactory = {};
    //Login Service
    var _login = function (ldata) {
        var deffer = $q.defer();
        $http.post(baseService + 'api/login/', JSON.stringify(ldata), {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
        }).success(function (data, status) {
            debugger;
            if (data != false) {
                _authentication.isAuth = true;
                _authentication.userName = ldata.userName;
                _authentication.userRole = ldata.userRole;
                localStorageService.set('authorizationData', { userName: ldata.userName, userRole: ldata.userRole });
            }
            deffer.resolve(data);
        }).error(function (err, status) {
            debugger;
            _logOut();
            deffer.reject(err);
        });
        return deffer.promise;
    };

    //Logout Service
    var _logOut = function () {
        debugger;
        localStorageService.remove('authorizationData');
        _authentication.isAuth = false;
        _authentication.userName = "";
        _authentication.userRole = "";
    };

    //Get all the autho Data
    var _fillAuthData = function () {
        var authData = localStorageService.get('authorizationData');
        if (authData) {
            _authentication.userName = authData.userName;
            _authentication.userRole = authData.userRole;
            _authentication.isAuth = true;
        }
    }

    loginServiceFactory.fillAuthData = _fillAuthData;
    loginServiceFactory.logOut = _logOut;
    loginServiceFactory.authentication = _authentication;
    loginServiceFactory.login = _login;

    return loginServiceFactory;
}]);