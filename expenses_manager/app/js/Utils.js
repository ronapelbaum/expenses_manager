/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 10/31/13
 * Time: 10:57 AM
 * To change this template use File | Settings | File Templates.
 */
function today() {
    var d = new Date();
    return d.getFullYear() + '-' + (((d.getMonth() + 1) < 10) ? "0" : "") + (d.getMonth() + 1) + '-' + ((d.getDate() < 10) ? "0" : "") + d.getDate();
}

function randomDate() {
    return '' + Math.floor((Math.random() * 15) + 2000) + '-' + formatNum(Math.floor((Math.random() * 12) + 1), 2) + '-' + formatNum(Math.floor((Math.random() * 30) + 1), 2);
}

function randomString(length) {
//    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var str = '';
    for (var j = 0; j < length; j++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));
    return str;
}

function randomCategory() {
    var possible = ['food', 'out', 'car', 'house', 'clothing'];
    return possible[Math.floor(Math.random() * possible.length)];
}


function formatNum(num, digit) {
    var base = Math.pow(10 ,(digit - 1));
    var tmp = num;
    var res = '';
    while (tmp / base < 1) {
        res += '0';
        tmp *= 10;
    }
    return res + num;
}

function randomExp(num) {
    var res = [];
    for (var i = 0; i < num; i++) {
        res.push({
            date: randomDate(),
            amount: Math.floor((Math.random() * 100) + 1),
            category: randomCategory()
        });
    }
    return res;
}