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

expMngControllers.controller('TrendCtrl', ['$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {
    $scope.catId = $routeParams.catId;

    $http.get('data/category_trend.json').success(function (data) {
        $scope.catList = data;
        //TODO add failure method

        //TODO we would like the Graph to update whenever a checkbox is set to true - display more than one trend
        //$scope.chartedTrends = $filter('filter')($scope.catList, {show: true}, true);
        $scope.chartedTrends = $filter('filter')($scope.catList, {category: $scope.catId}, true);
        $scope.trendGraph = new RGraph.Line('cvs', $scope.chartedTrends[0].amount)
            .Set('labels', $scope.chartedTrends[0].month)
            .Draw();
        //TODO fix y-axis labels
        RGraph.Register($scope.trendGraph);
    });


    $scope.refresh = function () {
        $scope.chartedTrends = $scope.getTrends();
        RGraph.Redraw();
    }


}]);

expMngControllers.controller('CategoryCtrl', ['$scope', '$http', function ($scope, $http) {

    $http.get('data/category_trend.json').success(function (data) {
        $scope.catList = data;
        //TODO add failure method
    });

}]);