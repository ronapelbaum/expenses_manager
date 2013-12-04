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
                controller: 'expTableCtrl'
            }).
            when('/categories',{
                templateUrl: 'templates/categories-trend.html',
                controller: 'catTrendCtrl'
            }).
            when('/categories/:catId',
            {
                templateUrl: 'templates/categories-trend.html',
                controller: 'catTrendCtrl'
            }).
            when('/category-select',
            {
                templateUrl: 'templates/category-select.html',
                controller: 'CategoryCtrl'
            }).
            otherwise({
                redirectTo: '/expenses'
            });
    }]);
