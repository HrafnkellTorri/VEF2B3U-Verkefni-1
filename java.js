//Verk 1
document.write("Hello World!");

//Verk 2
var x = "Here is a text from a variable. ";
var a = "Here is some more text. ";
var c = "And here is more. ";

var NewName = document.getElementById('name');
NewName.textContent = x + a + c;

//Verk 3
var cars; 
cars = ['Chevrolet', 'Lotus', 'BMW','Yaris','I20'];

for (i = 0; i < cars.length; i++) { 
 document.getElementById("array").innerHTML += "<br>" + cars[i] + " ";
} 

