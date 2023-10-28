/* Spinal Tap Case */
/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {

    let words = str.match(/[a-zA-Z][a-z]*/g);
    let lowercase_words = words.map((word) => word.toLowerCase());
    let spinal_str = lowercase_words.join("-")
    return spinal_str;
  }
  
  
  console.log(spinalCase('The_Andy_Griffith_Show'));