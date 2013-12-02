/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 12/2/13
 * Time: 6:40 PM
 * To change this template use File | Settings | File Templates.
 */
var expMngDirectives = angular.module('expMngDirectives', []);

expMngDirectives.directive('categorySelect', function () {
    return {
        restrict: 'E',
        scope: {
            category: '=info'
        },
        templateUrl: 'templates/category-detail.html'
    }
});