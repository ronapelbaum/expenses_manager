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
            when('/table',
            {
                templateUrl: 'templates/table.html',
                controller: 'TableCtrl'
            }).
            when('/trend',{
                templateUrl: 'templates/trend.html',
                controller: 'TrendCtrl'
            }).
            when('/trend/:catId',
            {
                templateUrl: 'templates/trend.html',
                controller: 'TrendCtrl'
            }).
            when('/category-select',
            {
                templateUrl: 'templates/category-select.html',
                controller: 'CategoryCtrl'
            }).
            otherwise({
                redirectTo: '/table'
            });
    }]);
