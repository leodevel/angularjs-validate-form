var app = angular.module('appValidateForm', []);

app.controller('ctrlForm', function ($scope) {
    $scope.validateEmail = function () {
        return true;
    };
});

app.directive('repeatpassword', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, control) {
            control.$validators.repeatpassword = function (modelValue, viewValue) {
                return viewValue == scope.password;
            };
        }
    };
});