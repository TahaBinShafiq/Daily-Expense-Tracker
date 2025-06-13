var expenses = [];

for (var i = 1; i <= 7; i++){
    var amount = prompt("Enter expense for day " + i + ":");
    var value = parseFloat(amount);

    if (!isNaN(value)){
        expenses.push(value);
    }else {
        alert("Invalid input! Please enter a number.");
        i--;
    }

}

function getTotalExpense(expArray){
    var total = 0;
    for(var i = 0; i < expArray.length; i++){
        total = total + expArray[i];
    }
    return total;
}

function getAverageExpense(expArray){
    var total = getTotalExpense(expArray);
    var avg = total / expArray.length;
    return avg;
}

var totalSpent = getTotalExpense (expenses);
var avgSpent = getAverageExpense (expenses);

console.log("Total this week: Rs " + totalSpent.toFixed());
console.log("Average per day: Rs " + avgSpent.toFixed());

