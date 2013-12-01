/**
 * Created with IntelliJ IDEA.
 * User: apelbaur
 * Date: 10/31/13
 * Time: 10:27 AM
 * To change this template use File | Settings | File Templates.
 */
function ExpenseList() {
    /*
     //private
     var expenseList = [];
     //public
     this.getExpenseList = function () {
     return expenseList;
     }
     */
    this.expList = [];
    this.dates = [];
    this.amounts = [];
    this.categories = [];
    this.categoriesSet = [];

    this.newCat = "...";
    this.categoriesSet.push(this.newCat);
}

//static
ExpenseList.Expense = function Expense(date, amount, category) {
    this.date = date;
    this.amount = amount;
    this.category = category;

};

/**
 * add an expense to the ExpenseList - ORDERED!
 * @param date
 * @param amount
 * @param category
 */
ExpenseList.prototype.add = function add(date, amount, category) {
    this.expList.push(new ExpenseList.Expense(date, amount, category));

    this.dates.push(date);
    this.amounts.push(amount);
    this.categories.push(category);

    if (this.categoriesSet.indexOf(category) < 0) {
        this.categoriesSet.push(category);
    }
};

ExpenseList.prototype.isNewCat = function isNewCat(str) {
    return this.newCat === str;
};

ExpenseList.prototype.addCat = function addCat(cat) {
    if (this.categoriesSet.indexOf(cat) < 0) {
        this.categoriesSet.push(cat);
    }
};

/**
 * get a mapping between category to sum of amounts
 * @returns {{}}
 *//*

 ExpenseList.prototype.getAmountByCategory = function getAmountByCategory() {
 var amountByCategory = {};
 for (var expense in this.expList) {
 var category = expense.category;
 var amount = expense.amount;

 if (amountByCategory[category] === undefined) {
 amountByCategory[category] = amount;
 } else {
 amountByCategory[category] += amount;
 }
 }
 return amountByCategory;
 };

 */
