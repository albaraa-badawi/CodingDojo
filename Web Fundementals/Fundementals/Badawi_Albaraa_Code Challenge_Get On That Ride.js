var age; //must be > 10
var height_inch; //must be > 42

if(height_inch>52){
    console.log("Get on that ride, kiddo!");
}
else {
    console.log("Sorry kiddo. Maybe next year.");
}

//Feature 1
if(height_inch>52 && age>10){
    console.log("Get on that ride, kiddo!");
}
else {
    console.log("Sorry kiddo. Maybe next year.");
}

//Feature 2
if(height_inch>52 || age>10){
    console.log("Get on that ride, kiddo!");
}
else {
    console.log("Sorry kiddo. Maybe next year.");
}