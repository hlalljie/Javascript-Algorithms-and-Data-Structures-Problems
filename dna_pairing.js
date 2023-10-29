/* DNA Pairing */
/*
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    let unpaired_arr = str.split("");
    let paired_arr = [];
    for (let base of unpaired_arr){
      switch(base){
        case "G":
          paired_arr.push(["G", "C"]);
          break;
        case "C":
          paired_arr.push(["C", "G"]);
          break;
        case "T":
          paired_arr.push(["T", "A"]);
          break;
        case "A":
          paired_arr.push(["A", "T"]);
          break;
      }
    }
    return paired_arr;
  }
  
  console.log(pairElement("GCG"));