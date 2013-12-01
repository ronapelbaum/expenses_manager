/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */
var expMngApp = angular.module('expMngApp', []);

expMngApp.controller('TableCtrl', function ($scope, $http) {
    $http.get('data/expenses.json').success(function (data) {
        $scope.expList = data;
        //TODO add failure method
    });
//     $scope.expList = randomExp(15);

    $scope.orderProp = 'Date';

    $scope.sort = function (prop) {
//        console.info('sort. prop=' + prop + '; orderProp=' + $scope.orderProp);

        if ($scope.orderProp === prop) {
            $scope.orderProp = '-' + prop;
        } else if ($scope.orderProp === '-' + prop) {
            $scope.orderProp = '';
        } else {
            $scope.orderProp = prop;
        }
//        console.info('set to=' + $scope.orderProp);

    };

    $scope.sortChar = function (prop) {
        var res = 'neutral';
        if ($scope.orderProp === prop) {
            res = 'down';
        } else if ($scope.orderProp === '-' + prop) {
            res = 'up';
        }
//        console.info('sortChar. prop=' + prop + '; orderProp=' + $scope.orderProp + "; res=" + res);
        return res;
    }

});