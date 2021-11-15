//create a function to determine if a number is odd or not
//func should take number as parameter and return true if odd and false otherwise.

const isOdd = function(num) {
  return num%2 !== 0;
}

//To check function. 
console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));