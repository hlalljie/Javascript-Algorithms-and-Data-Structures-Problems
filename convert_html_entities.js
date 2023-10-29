/* Covert HTML Entities*/
/* 
    Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
    let htmlStr = "";
    for (let i = 0; i < str.length; i++){
      switch(str[i]){
        case "&":
          htmlStr += "&amp;";
          break;
        case "<":
          htmlStr += "&lt;";
          break;
        case ">":
          htmlStr += "&gt;";
          break;
        case '"':
          htmlStr += "&quot;";
          break;
        case "'":
          htmlStr += "&apos;";
          break;
        default:
          htmlStr += str[i];
          break;
      }
    }
    return htmlStr;
  }
  
  console.log(convertHTML("Dolce & Gabbana"));