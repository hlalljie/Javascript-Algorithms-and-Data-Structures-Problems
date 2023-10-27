/*
You will be provided with an initial array as the first argument to the destroyer function, followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

 */

function destroyer(arr) {
    // Trim arguments list to just destroyers
    delete arguments[0];
    // swap keys and values to create simple lookup table
    // (value is not used)
    let destroyers = {};
    for (let arg in arguments){
      destroyers[arguments[arg]] = arg
    }
  
    // create a new array based on values not in the lookup
    let newArr = []
    for (let elem of arr){
      if (!(elem in destroyers)){
        newArr.push(elem);
      }  
    }
      
    return newArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));