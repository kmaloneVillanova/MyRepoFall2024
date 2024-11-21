//alert("Hello World!");

var hello="Hello World!";
console.log("This is good for debugging "+hello);

function print3Ways() {
    alert("Hello World!");
    console.log("printing to the console");
    document.write("this will re-write the HTML page");
}

const arr = [1,2,3,4,5];

function firstFunction(callback) {
    console.log("about to execute the callback function");
    callback();
}

function myCallbackFunction() {
    console.log("this is the callback function that does something special.");
}

function soManyFunctions() {
    console.log("in soManyFunctions. Begin function calls.");
    firstFunction(myCallbackFunction);
    console.log("returning to soManyFunctions");
}