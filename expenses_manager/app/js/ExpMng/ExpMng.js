function ExpMng($scope, $filter) {
    $scope.exps = new ExpenseList();

    $scope.inputExp = function inputExp() {
        //get input fields
        var date = $scope.input.date;
        var amount = $scope.input.amount;
        var category = $scope.input.category;
        $scope.addExp(date, amount, category);
        //re-init the input fields
        $scope.input.amount = '';
        $scope.input.category = '';
    };

    $scope.addExp = function addExp(date, amount, category) {
        console.info('addExp(' + date + ',' + amount + ',' + category + ')');
        $scope.exps.add(date, amount, category);
        //redraw
        RGraph.Redraw();
    };

    $scope.catChange = function () {
        if ($scope.exps.isNewCat($scope.input.category)) {
            var newCat = prompt("Create Category");
            $scope.exps.addCat(newCat);
            $scope.input.category = newCat;
        }
    };

    $scope.initGraph = function initGraph() {
        console.info("initGraph()");

        $scope.bar = new RGraph.Bar('cvs', $scope.exps.amounts);
        $scope.bar.Set('chart.labels', $scope.exps.categories);

        $scope.bar.Draw();
        RGraph.Register($scope.bar);
    };

    $scope.init = function init() {
        console.info("init()");
        $scope.initGraph();
    };

    $scope.loadRandom = function loadRandom(num) {
        for (var i = 0; i < num; i++) {
            $scope.addExp(
                randomDate(),
                Math.floor((Math.random() * 100) + 1),
                randomString(2)
            );
        }
    };

}

