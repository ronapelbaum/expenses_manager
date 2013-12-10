/**
 *
 * @param data
 * @param colAtt
 * @param rowAtt
 * @param valAtt
 *
 * TODO: get the pivot properties at json format:
 * {
 *     row: "category",
 *     column: "month",
 *     value: "amount",
 *     value_sum: true/false
 * }
 */
function Pivot(data, rowAtt, colAtt, valAtt) {
    this.pivotColumns = [];
    this.pivotColumns.push(rowAtt);
    this.pivotRows = [];

    var pivotMap = {};
    for (var i = 0; i < data.length; i++) {
        var dataEntry = data[i];
        var rowVal = dataEntry[rowAtt];
        var colVal = dataEntry[colAtt];
        if (this.pivotColumns.indexOf(colVal) < 0)this.pivotColumns.push(colVal);
        var valVal = dataEntry[valAtt];
        //map pivotMap by rowVal
        if (pivotMap[rowVal] === undefined) {
            //create row
            pivotMap[rowVal] = {};
            pivotMap[rowVal][rowAtt] = rowVal;
        }
        if (pivotMap[rowVal][colVal] === undefined) {
            //init column
            pivotMap[rowVal][colVal] = 0;
        }
        //sum the values
        //TODO fix adding for strings
        pivotMap[rowVal][colVal] += valVal;
    }

    for (var row in pivotMap) {
        this.pivotRows.push(pivotMap[row]);
    }
}