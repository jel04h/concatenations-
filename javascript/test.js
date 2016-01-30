//var first_name = "joan"; two forward slashes mean a single line comment
//var last_name = "williams";
/* to block comment out */

/*
var greeting = "hello!";

var first_name = "joan";

var last_name = "williams";

var message1 = "don't forget to pick up these items";

var message2 = "also, make sure to gather wood for doomsday prepping";

var favoriteQuote = "\"Four score...\"";
// "\" is the "escape" backslashes
//camelCase is completely legal, but it annoys people...?

var goodbye = "see you later";

var image = '<img src="">';
*/

//BAD variable names (causes errors)
//var first name = "";
//var 2first_name = "";
//var math = "";

//operators
//"=" assigns values
//"+=" adds to whatever the variable currently has ---> (concantenation assignment operator, with string)

//output variables to the console!!!!

/*
console.log(greeting);
console.log(first_name);
console.log(last_name);
console.log(message1);
console.log(message2);
console.log(favoriteQuote);
console.log(goodbye);
*/

// console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + favoriteQuote + " " + goodbye)

//My fellow *Americans*, ask not what your *country* can do for *you* - ask what *you* can do for your *country*.

var static_words1 = "My fellow ";
var static_words2 = ", ask not what your ";
var static_words3 = " can do for ";
var static_words4 = " - ask what ";
var static_words5 = " can do for your ";

var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);
  
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5);
  // document.getElementById("myForm").elements.item(0).value;
  // return false;
}


