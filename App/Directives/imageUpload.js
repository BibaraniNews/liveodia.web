'use strict';
LiveOdiaApp.directive('imageUpload', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            debugger;
            var model = $parse(attrs.imageUpload);
            var modelSetter = model.assign;
            element.bind('change', function () {
                debugger;
                scope.$apply(function () {
                    debugger;
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
