
var title; //'variable title'
var message;

title = "Welcome!";
message = "Check our new listings";

//use 'get element ID' to select the desired element in html
//but first begin by linking it with a new variable 'var element title'
//var elementTitle is stored inside the 'hookTitle' string?
var elementTitle = document.getElementById('hookTitle');

//this sends the defined 'variable title' to the html and replaces it with the written javascript title
elementTitle.innerHTML = title;
