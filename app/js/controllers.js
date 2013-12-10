/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */
var expMngControllers = angular.module('expMngControllers', []);

expMngControllers.controller('navigationCtrl', ['$scope', function ($scope) {
    //TODO handle correct selected when refresh
//    $scope.selected = document.URL.search('table') > 0 ? 'table' : 'category-select';
    $scope.navOptions = ['expenses', 'expensesPivot', 'categories'];
    $scope.select = function (nav) {
        $scope.selected = nav;
    };
}]);

expMngControllers.controller('expensesCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/exp_expenses_mock.json').success(function (data) {
        $scope.rows = data;
        //TODO add failure method
    });
    $scope.columns = ['date', 'amount', 'category'];

}]);

expMngControllers.controller('expensesPivotCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data/exp_expenses_mock.json').success(function (data) {
        var pivot = new Pivot(data, 'category', 'month', 'amount');
        $scope.rows = pivot.pivotRows;
        $scope.columns = pivot.pivotColumns;
    });
    $scope.columns = ['category'];


}]);

expMngControllers.controller('categoriesCtrl', ['$scope', '$http', '$routeParams', '$filter', function ($scope, $http, $routeParams, $filter) {

    $http.get('data/exp_categories_mock.json').success(function (data) {
        $scope.catList = data;
        //TODO add failure method

        if (undefined !== $routeParams.catId) {
            for (var i = 0; i < $scope.catList.length; i++) {
                if ($routeParams.catId.indexOf($scope.catList[i].name) >= 0) {
                    $scope.catList[i].show = true;
                }
            }
        }
        //update trend chart
        $scope.update();
    });


    $scope.update = function () {
            //update data
            $scope.chartConfig.series = $filter('filter')($scope.catList, {show: true}, true);
            //update x-axis
            $scope.chartConfig.xAxis = {categories: $scope.catList[0].labels};
    };

    //TODO export to a separate object - maybe json
    $scope.chartConfig = {
        options: {
            tooltip: {
                valueSuffix: ' NIS'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 1
            },
            chart: {
                type: 'line'
            }
        },
        series: [],
        xAxis: {},
        title: {
            text: 'Chart'
        },

        loading: false
    };
}]);

