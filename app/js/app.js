/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */

var expMngApp = angular.module('expMngApp', [
    'ngRoute',
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
            when('/trend/:catId',
            {
                templateUrl: 'templates/trend.html',
                controller: 'TrendCtrl'
            }).
            otherwise({
                redirectTo: '/table'
            });
    }]);
