'use strict';
LiveOdiaApp.controller('adminController', ['$scope', '$rootScope', 'adminServiceFactory', function ($scope, $rootScope, adminServiceFactory) {

    //Save new file 
    $scope.hotnews = {};
    $scope.Newstory = {};
    $scope.Topnews = {};
    $scope.hnewsTitle = {};
    $scope.selectedOption;
    $scope.ntitle = "";

    $scope.changeOption = function () {
        debugger;
        $scope.ntitle = $scope.selectedOption.HID;
    };

    $scope.AddNewCategory = function (cname) {
        adminServiceFactory.AddCategory(cname).then(function (data) {

        });
    }

    $scope.submitHotNews = function () {
        debugger;
        var file = {};
        file = $scope.hotnews;
        file["HotNews"] = "hnews";
        if ($scope.selectedOption == undefined)
            file["selOption"] = "1";
        else
            file["selOption"] = $scope.selectedOption.HID;
        if ($scope.myFile1 != undefined)
            file["file"] = $scope.myFile1;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
            file = null;
            $scope.hotnews = {};
            $scope.resetForm("submitHotNews");
        });
    };

    $scope.submitNewstory = function () {
        debugger;
        var file = {};
        file = $scope.Newstory;
        file["Newstory"] = "nstory";
        if ($scope.myFile2 != undefined)
            file["file"] = $scope.myFile2;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
            file = null;
            $scope.Newstory = {};
            $scope.resetForm('submitNewstory');
        });
    };

    $scope.getAllHotNewsTitle = function () {
        debugger;
        adminServiceFactory.getHotFullNewsTitle().then(function (hnewsdata) {
            if (hnewsdata) {
                debugger;
                $scope.hnewsTitle = hnewsdata;
                $scope.selectedOption = $scope.hnewsTitle.HotNewsTitle[0];
            };
        })
    };

    $scope.submitTopNews = function () {
        debugger;
        var file = {};
        file = $scope.Topnews;
        file["TopNews"] = "tnews";
        if ($scope.myFile3 != undefined)
            file["file"] = $scope.myFile3;
        adminServiceFactory.uploadFileToUrl(file).then(function (data) {
            debugger;
            file = null;
            $scope.Topnews = {};
            $scope.resetForm("submitTopNews");
        });
    };
    $scope.getAllHotNewsTitle();

    $scope.resetForm = function (filereset) {
        if (filereset == "submitNewstory") {
            angular.element(document.querySelector('#file2')).val(null);
            $scope.myFile2 = undefined;
        }
        else if (filereset == "submitTopNews")
            angular.element(document.querySelector('#file3')).val(null);
        else if (filereset == "submitHotNews")
            angular.element(document.querySelector('#file1')).val(null);
    };

}]);
