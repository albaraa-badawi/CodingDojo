/*
    Given an array arr1 and array arr2, merge both arrays and return one array
    const arr1 = ["a", "b", "c"]
    const arr2 = ["c", "e", "f"]
    
    const expectedOutput = ["a", "b", "c", "c", "e", "f"] 
*/

function merge(arr1, arr2){
    var result = arr1;
    /*
    for(var i=0; i<arr1.length; i++){
        result[i] = arr1[i];
    }
    */
    for(var i=0; i<arr2.length; i++){
        /*result[i + arr1.length] = arr2[i];*/ /*doesn't work, it affect arr1*/
        result.push(arr2[i]);
    }
    return result
    
}

const arr1 = ["a", "b", "c"]
const arr2 = ["c", "e", "f"]

console.log(merge(arr1,arr2))
console.log(arr1)