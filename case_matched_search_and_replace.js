/* Search and Replace */
/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
*/

function myReplace(str, before, after) {
    let before_i = 0
    //loop though all letters in string
    //build build words if they match the string
    for (let i = 0; i < str.length; i++){
      if (str[i].toLowerCase() == before[before_i].toLowerCase()){
        before_i++;
        if (before_i == before.length){
          // Check case of first letter and adjust replacement
          let cased_after;
          if (/[A-Z]/.test(str[(i-before.length)+1])){
            cased_after = after[0].toUpperCase() + after.substring(1);
          }
          else{
            cased_after = after[0].toLowerCase() + after.substring(1);
          }
          //make replacement
          str = str.substring(0, (i-before.length)+1) + cased_after + str.substring(i+1);
          i += after.length -before.length; 
          before_i = 0;
        }
      }
      else{
        before_i = 0
      }
    }
    return str;
  }
  
  console.log(myReplace("A quick brown fox Jumped and jumped over the lazy dog", "jumped", "leaped"));