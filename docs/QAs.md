# Javascript Questions & Answers
#### Question 1: What is the "this" keyword?
#### Question : What is the difference between self and this?
#### Question : What is a closure?
#### Question : What is currying function?
#### Question : What is IIFE?
#### Question : What is hoisting?
#### Question : What is the difference between var and const/let?
#### Question : What is the difference between == and ===?
<b>Answer:</b>

- "==" refers to as equals, and perform abstract equality. Under the hood it converts string to number, non-boolean to boolean, object to primitive datatype then compares them.
- "===" refers to as strict equals, and perform strict equality therefore it compares up to the type.
#### Question : What is "use strict"?
<b>Answer:</b>

It enforces stricter parsing and error handling by failing fast and loudly: 

- preventing the use of global variables
- preventing a function from taking in parameters of the same name.
- preventing deletion of an object's property that shouldn't be deleted.
- and many other
#### Question : What would be the output of the following code?
``` Javascript
function createButtons() {
   for (var i = 1; i &lt;= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}

createButtons();
```
#### Question : What would be the output of the following code?
``` Javascript
var fedapay = {
    comission: 4,
    logCommission: function() {
        var self = this;
        console.log("In logCommission - this.comission: " + this.comission);
        console.log("In logCommission - self.comission: " + self.comission);
        (function() {
            console.log("In IIFE - this.comission: " + this.comission);
            console.log("In IIFE - self.comission: " + self.comission);
        })();
    }
};

fedapay.logCommission();
```
#### Question : What would be the output of the following code?
``` Javascript
this.comission = 2
var fedapay = {
    comission: 4,
    logCommission: function() {
        var self = this;
        console.log("In logCommission - this.comission: " + this.comission);
        console.log("In logCommission - self.comission: " + self.comission);
        (function() {
            console.log("In IIFE - this.comission: " + this.comission);
            console.log("In IIFE - self.comission: " + self.comission);
        })();
    }
};

fedapay.logCommission();
```
#### Question : What would be the output of the following code?
``` Javascript
var num = 50;

function logNumber() {
    console.log(num);
    var num = 100;
}

logNumber();
```
#### Question : What would be the output of the following code?
``` Javascript
var num = 50;

function logNumber() {
    console.log(num);
}

logNumber();
```
#### Question : What would be the output of the following code?
``` Javascript
let num = 50;

function logNumber() {
    console.log(num);
    let num = 100;
}

logNumber();
```
#### Question : What would be the currying version of the following code?
``` Javascript

function getTravelTime(distance, speed) {
    return distance / speed
}

console.log(getTravelTime(5200, 50));
console.log(getTravelTime(5200, 100));
console.log(getTravelTime(5200, 500));
```
<b>Answer:</b>
``` Javascript

function getTravelTime(distance) {
    return function(speed){
        return distance / speed
    }
}

const distanceAt5200 = getTravelTime(5200);
console.log(distanceAt5200(50))
console.log(distanceAt5200(100))
console.log(distanceAt5200(500))
```