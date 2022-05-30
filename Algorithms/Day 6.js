/*
    Given an array, insert a given element in the begining of the array
    
    // Given array
    let arr = ["a", "b", "c", "d"]

    // Expected output after adding "Z"
    ["z", "a", "b", "c", "d"]
*/

function insert(element, arr){
    var result = [];
    result[0] = element;

    for(var i=0; i<arr.length; i++){
        result.push(arr[i]);
    }
    return result
    
}

const arr = ["a", "b", "c", "d"]

console.log(insert("z",arr))
