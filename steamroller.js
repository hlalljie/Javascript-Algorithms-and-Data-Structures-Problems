/* Steamroller */
/* 
Flatten a nested array. You must account for varying levels of nesting. 
*/
function steamrollArray(arr) {
    let newArr = [];
    for (let elem of arr){
      if (Array.isArray(elem)){
          newArr.push(...steamrollArray(elem));
      }
      else{
        newArr.push(elem);
      }
    }
    return newArr;
    
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]));