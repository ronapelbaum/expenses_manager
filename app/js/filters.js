/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 12/2/13
 * Time: 2:11 PM
 * To change this template use File | Settings | File Templates.
 */

var expMngFilters = angular.module('expMngFilters', []);

expMngFilters.filter('checkmark', function () {
    return function (input) {
        return input ? '\u2713' : '\u2718';
    };
});

expMngFilters.filter('get', function () {
    //TODO is it really necessary to use this filter?
    return function (obj, key, def) {
        var res = obj[key];
        return  res === undefined ? def : res;
    }
});