/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */
var expMngControllers = angular.module('expMngControllers', []);

expMngControllers.controller('TableCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/expenses.json').success(function (data) {
        $scope.expList = data;
        //TODO add failure method
    });

    $scope.orderProp = 'Date';

    $scope.sort = function (prop) {

        if ($scope.orderProp === prop) {
            $scope.orderProp = '-' + prop;
        } else if ($scope.orderProp === '-' + prop) {
            $scope.orderProp = '';
        } else {
            $scope.orderProp = prop;
        }

    };

    $scope.sortChar = function (prop) {
        var res = 'neutral';
        if ($scope.orderProp === prop) {
            res = 'down';
        } else if ($scope.orderProp === '-' + prop) {
            res = 'up';
        }
        return res;
    }

}]);