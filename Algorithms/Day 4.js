/*
    Given a string x, capitlize the first character in the string 
    and return the sentence
    so, given string text
    const text = "hello"
    Expected output "Hello"
*/

/*
    Given a string x, capitlize every word in the string and return it
    so, given string text
    const text = "hello world from javascript"
    Expected output "Hello World From Javascript"
*/

function capitlize_first(str){
    return str[0].toUpperCase()+str.slice(1)
}

function capitlize(str){
    var arr = str.split(" ")
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)
    }
    return arr.join(" ")
}

console.log(capitlize_first("hello"))
console.log(capitlize("hello world from javascript"))