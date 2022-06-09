/* 
  Longest Palindrome
  For this challenge, we will look not only at the entire string provided,
  but also at the substrings within it.
  Return the longest palindromic substring. 
  Strings longer or shorter than complete words are OK.
  All the substrings of "abc" are:
  a, ab, abc, b, bc, c
*/



const str1 = "what up, daddy-o?";
const expected1 = "dad";

const str2 = "uh, not much";
const expected2 = "u";

const str3 = "Yikes! my favorite racecar erupted!";
const expected3 = "e racecar e";

const str4 = "a1001x20002y5677765z";
const expected4 = "5677765";

const str5 = "a1001x20002y567765z";
const expected5 = "567765";
const str6 = "a   A"
/**
 * Finds the longest palindromic substring in the given string.
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

console.log(longestPalindromicSubstring(str6))

/*****************************************************************************/
/*
function isPalindrome(str) {
    for(var i=0; i < Math.floor(str.length/2); i++) {
        var leftChar = str[i]
        var rightChar = str[str.length - i - 1]
        if(leftChar !== rightChar) {
            return false;
        }
    }
    return true;
}
*/
function isPalindrome(str){
    var reversed =  str.split("").reverse().join("");
    
    return (str.toLowerCase() === reversed.toLowerCase())? true : false
    
}

function longestPalindromicSubstring(str){
    var substring = "";
    var longest_pal = "";
    for(var i=0; i<str.length; i++){
        substring="";
        for(var j=i; j<str.length;  j++){
            substring+=str[j];
            if(isPalindrome(substring) && substring.length>longest_pal.length){
                longest_pal=substring;
            }
        }
    }
    return longest_pal
}