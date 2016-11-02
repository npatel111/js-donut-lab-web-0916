//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests = parseInt(prompt("How many guests?"));
var donuts = parseInt(prompt("How many donuts?"));
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts
if (donuts > guests) {
  alert("We have " + donuts +  "donuts and " + guests + " guests, so there are enough donuts!")
} else {
  alert("We have" + donuts + " donuts and " + guests + " guests, so there are not enough donuts!")
}

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
