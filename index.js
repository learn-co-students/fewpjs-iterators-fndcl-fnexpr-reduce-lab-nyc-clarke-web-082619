const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(function(total, batch) {return total + batch}, 0);
// may need to be assigned to a variable, like let result = etc, and may need a return in that case