/* 
  An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.
  Is there a quick way to determine if they aren't an anagram before spending more time?
  Given two strings
  return whether or not they are anagrams
*/

const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

console.log(isAnagram(strA4,strB4))

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    var dict1 = makeFrequencyTable(s1);
    var dict2 = makeFrequencyTable(s2);

    if(dict1.length != dict2.length){
        return false;
    }
    for( var key in dict1 )
    {
        if( !( key in dict2 ) )
            return false;

        if( dict1[key] != dict2[key] )
            return false;

    }
    
    return true

}

function makeFrequencyTable(str) {
    var dic = {};
    for(var i of str.toLowerCase()){
        if(i in dic){
            dic[i]+= 1;
        }
        else{

            dic[i] = 1;
        }
    }
    return dic
}