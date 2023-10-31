/* Arguments Optional */
/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum: 
*/

function addTogether(num1, ...args) {
    if (typeof num1 != "number"){
      return undefined;
    }
    let f = function(num2){
      if (typeof num2 != "number")
      {
        return undefined;
      }
      return num1 + num2;
    };
    if (args.length > 0){
      return f(args[0])
    }
    return f;
}

console.log(addTogether(2, 3));