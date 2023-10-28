/* Pig Latin */
/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. 
*/
function translatePigLatin(str) {
    let consonants = /^[^aeiou]+/;
    if (consonants.test(str)){
      let cons_clust = str.match(consonants)[0]
      return str.substring(cons_clust.length) + cons_clust + "ay";
    }
    return str + "way";
  }
  
  console.log(translatePigLatin("glove"));