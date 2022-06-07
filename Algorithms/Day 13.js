/* 
  String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
function decodeStr(str) {
    var result = "";
    var char;
    var nrepeat;
    if(parseInt(str[1]) == NaN){
        return str
    }
    var array = split(str);
    console.log(array);
    for(var i=0; i<array.length; i+=2){
        char = array[i];
        nrepeat = parseInt(array[i+1]);
        result+= char.repeat(nrepeat);
    }
    return result
}

function split(str){
    var arr = [];
    var char = "";
    for(var i=0; i<str.length; i++){
        char = str[i];
        console.log(char);
        console.log(str[i+1]);
        while(parseInt(str[i+1]) != NaN){
            char+= str[i+1];
            i++;
            console.log(char);
        }
        arr.push(char);
    }
    return arr
}
console.log(split(str2));


