const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//  const totalBatteries = batteryBatches.reduce((total,current) => total + current);
const totalBatteries = batteryBatches.reduce(function(total, current) {return total + current});