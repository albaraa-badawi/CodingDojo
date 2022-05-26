var output;
for(var i=1; i<=100; i++){
    output = i;

    if(i%3 == 0){
        output="Fizz";
    }

    if(i%5 == 0){
        output="Buzz";
    }

    if(i%3 == 0 && i%5 == 0){
        output="FizzBuzz";
    }

    console.log(output)
}