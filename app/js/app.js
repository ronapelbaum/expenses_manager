/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */

var expMngApp = angular.module('expMngApp', [
    'ngRoute',
    'highcharts-ng',
    'expMngControllers',
    'expMngFilters',
    'expMngDirectives'
]);

expMngApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/expenses',
            {
                templateUrl: 'templates/expenses-table.html',
                controller: 'expensesCtrl'
            }).
            when('/categories',{
                templateUrl: 'templates/categories-trend.html',
                controller: 'categoriesCtrl'
            }).
            when('/categories/:catId',
            {
                templateUrl: 'templates/categories-trend.html',
                controller: 'categoriesCtrl'
            }).
            otherwise({
                redirectTo: '/expenses'
            });
    }]);
