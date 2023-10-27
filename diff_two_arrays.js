/*
Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/

function diffArray(arr1, arr2) {
    let elementCount = {}
  
    function getType (){
      
    }
  
    function countElement(elem){
      if (Object.hasOwn(elementCount, elem)){
        if (Object.hasOwn(elementCount[elem], [typeof elem])){
          elementCount[elem][typeof elem]++;
        }
        else{
          elementCount[elem][typeof elem] = 1;
        }
      }
      else{
        elementCount[elem] = {};
        elementCount[elem][typeof elem] = 1;
      }
    }
    function countElementList(arr){
      for (let elem of arr){
        countElement(elem);
      }
    }
    
    countElementList(arr1);
    countElementList(arr2);
    
    let newArray = [];
    for (let value in elementCount){
      for (let type in elementCount[value]){
        if (elementCount[value][type] == 1){
          switch(type){
            case "number":
              newArray.push(parseFloat(value));
              break
            case "boolean":
              newArray.push(value == 'true');
              break
            default:
              newArray.push(value);
              break
          }
        }
      }
    }
  
    return newArray;
  }
  
  console.log(diffArray([false, "abc", undefined, 7, 5], [1, 2, 3, 4, 5]));