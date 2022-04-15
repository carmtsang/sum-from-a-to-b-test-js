//fromN  will always be less than or equal to toN

//base case = fromN > toN
//recursive case = fromN <= N

function sum(fromN, toN) {
  if (fromN === toN) {
    return toN;
  } else if (fromN <= toN) {
   return fromN + sum(fromN + 1, toN);
  }
  // Sum all the values from fromN up to toN
}

console.log(sum(3,10));
//sum(0,0) = 0
//sum(0,1) = 1
//sum(1,1) = 1
//sum(1,2) = 1+2
//sum(1,3) = 1 + 2 +3


module.exports = sum;
