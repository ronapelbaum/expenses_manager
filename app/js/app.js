/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 11/20/13
 * Time: 4:50 PM
 * To change this template use File | Settings | File Templates.
 */

var expMngApp = angular.module('expMngApp', ['ngRoute', 'expMngControllers']);

expMngApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/table',
        {
            templateUrl:'templates/table.html',
            controller:'TableCtrl'
        }).
        otherwise({
            redirectTo:'templates/temp.html'})
}]);
