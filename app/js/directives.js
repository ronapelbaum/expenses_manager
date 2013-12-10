/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 12/2/13
 * Time: 6:40 PM
 * To change this template use File | Settings | File Templates.
 */
var expMngDirectives = angular.module('expMngDirectives', []);

expMngDirectives.directive('sortableTable', function () {
    return {
        restrict: 'E',
        scope: {
            columns: "=",
            rows: "=",
            filterProp:"=filter"
        },
        templateUrl: 'templates/sortable-table.html',
        link: function (scope) {
            //responsible for sorting
            scope.orderProp = scope.columns[0];
            scope.sort = function (prop) {
                if (scope.orderProp === prop) {
                    scope.orderProp = '-' + prop;
                }/* else if (scope.orderProp === '-' + prop) {
                    scope.orderProp = '';
                }*/ else {
                    scope.orderProp = prop;
                }
            };
            scope.sortChar = function (prop) {
                var res = 'neutral';
                if (scope.orderProp === prop) {
                    res = 'down';
                } else if (scope.orderProp === '-' + prop) {
                    res = 'up';
                }
                return res;
            }

        }
    };
});