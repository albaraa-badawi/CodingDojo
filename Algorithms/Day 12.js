/*
    Given array that has arrays of integers, detect the maximum number in each of those arrays and return an array of the maximum numbers
    for example given the below array
    const arr = [
        [3,4,5,6],
        [10,20,30],
        [7,8,9]
    ];
    expected output
    [6,30,9]
    bonus, add the maximum value to the begining of the array so the result become
    [30,6,9]
*/

const arr1 = [
    [3,4,5,6],
    [10,20,30],
    [7,8,9]
];

var array = [[3,300,5,6],[200,20,30],[7,8,500]];

console.log(maxArry2D(array));


function maxArry2D(arr){
    var max = [];
    for(var i=0; i<arr.length; i++){
        max[i] = maxArry(arr[i]);
    }
    var index = indexMax(max);
    var temp = max[index];
    max[index] = max[0];
    max[0] = temp;

    return max
}

function maxArry(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max
}

function indexMax(arr){
    var max = arr[0];
    var index = 0;
    for(var i=1; i<arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
            index = i;
        }
    }
    return index
}