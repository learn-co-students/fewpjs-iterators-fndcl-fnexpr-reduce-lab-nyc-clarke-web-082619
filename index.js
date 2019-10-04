const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function adder(totalAmount, addAmount) {
    return totalAmount + addAmount;
}



let totalBatteries = batteryBatches.reduce(function(total, element){ return element + total});