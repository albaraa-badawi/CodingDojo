/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
  var string1 = "abcd";
  var output = "dcba";
*/
var string1 = "abcd";

function reverse(str){
    var reversed = [];
    for(var i=str.length-1; i>=0; i--){

        reversed.push(str[i]);
    }
    return reversed.join("")
}


console.log(reversed(string1))



/********************************************************************/
/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    var list = str.split(" ");
    var acronym = [];
    for(var i=0; i<list.length; i++){
        acronym.push(list[i][0]);
    }
    return acronym.join("").toUpperCase()
}

console.log(acronymize(str4))