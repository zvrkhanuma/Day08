const randomInteger = require("../../ex12/src");

// Only chnage code below this line
function randomRangeNumber(minNumber, maxNumber){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInteger();
console.log(randomInteger(10, 50));
// Only change  code above this line
module.exports = randomRangeNumber;