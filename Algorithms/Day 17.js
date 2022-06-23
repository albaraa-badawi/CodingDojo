/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

console.log(stringDedupe(str4))

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    var output = "";
    for(var i=0; i<str.length; i++){
        if(!(output.includes(str[i]))){
            output+=str[i];
        }
    }
    return output
}

/************************************************************************************/

/*
Given a string containing space separated words
Reverse each word in the string.
If you need to, use .split to start, then try to do it without.
*/

const str1_1 = "hello";
const expected1_1 = "olleh";

const str2_1 = "hello world";
const expected2_1 = "olleh dlrow";

const str3_1 = "abc def ghi";
const expected3_1 = "cba fed ihg";

console.log(reverseWords(str2_1))

/**

Reverses the letters in each words in the given space separated
string of words. Does NOT reverse the order of the words themselves.
@param {string} str Contains space separated words.
@returns {string} The given string with each word's letters reversed.
*/
function reverseWords(str) {
    var lst = splitString(str);
    for(var i=0; i<lst.length; i++){
        var index = lst[i].length-1;
        for(var j=0; j<~~(lst[i].length/2); j++){
            var temp = lst[i][j];
            lst[i][j] = lst[i][index];
            lst[i][index] = temp;
            index--;
        }
    }
    return lst.map(a => a.join("")).join(" ");
}

function splitString(str){
    var word_count = 0;
    var lst = [[]];
    for(var i=0; i<str.length; i++){
        if(str[i]==" "){
            word_count++
            lst.push([])
            continue;
        }
        lst[word_count].push(str[i]);
    }
    return lst
}

/**************************************************/

/*
Reverse Word Order
Given a string of words (with spaces)
return a new string with words in reverse sequence.
*/

const str1_2 = "This is a test";
const expected1_2 = "test a is This";

const str2_2 = "hello";
const expected2_2 = "hello";

const str3_2 = " This is a test ";
const expected3_2 = "test a is This";

console.log(reverseWordOrder(str3_2))

/**

Reverses the order of the words but not the words themselves form the given
string of space separated words.
@param {string} wordsStr A string containing space separated words.
@returns {string} The given string with the word order reversed but the words
themselves are not reversed.
*/
function reverseWordOrder(wordsStr) {
    var new_arr = [];
    var arr = wordsStr.trim().split(" ");
    for(var i=arr.length-1; i>=0; i--){
        new_arr.push(arr[i]);
    }
    return new_arr.join(" ")
}


