// MATH EXPRESSIONS CHAPTER #5

var firstNumber = +prompt("Enter the first number: ");
var secondNumber = +prompt("Enter the second number: ");

var sum = (firstNumber) + (secondNumber);

document.write("The sum of " + firstNumber + " and " + secondNumber + " is: " + sum + "<br>");

document.write("<br>");

var firstNumber = +prompt("Enter the first number: ");
var secondNumber = +prompt("Enter the second number: ");

var subtraction = firstNumber - secondNumber;
var multiplication = firstNumber * secondNumber;
var division = firstNumber / secondNumber;
var modulus = firstNumber % secondNumber;

document.write("Subtraction: " + firstNumber + " - " + secondNumber + " = " + subtraction + "<br>");
document.write("Multiplication: " + firstNumber + " * " + secondNumber + " = " + multiplication + "<br>");
document.write("Division: " + firstNumber + " / " + secondNumber + " = " + division + "<br>");
document.write("Modulus: " + firstNumber + " % " + secondNumber + " = " + modulus + "<br>");

document.write("<br>");

// Step a: Declare a variable
var num;

// Step b: Display initial declaration
document.write("Value after variable declaration is: " + num + "<br>");

// Step c: Initialize the variable with some number
num = 5;

// Step d: Display initial value
document.write("Initial value: " + num + "<br>");

// Step e: Increment the variable
num++;

// Step f: Display value after increment
document.write("Value after increment is: " + num + "<br>");

// Step g: Add 7 to the variable
num += 7;

// Step h: Display value after addition
document.write("Value after addition is: " + num + "<br>");

// Step i: Decrement the variable
num--;

// Step j: Display value after decrement
document.write("Value after decrement is: " + num + "<br>");

// Step k: Show the remainder after dividing the variable's value by 3
var remainder = num % 3;

// Step l: Display the remainder
document.write("The remainder is: " + remainder + "<br>");

document.write("<br>");

var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");

document.write("<br>");

var number = +(prompt("Enter a number to display its multiplication table:"));

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write(number + " x 1 = " + (number * 1) + "<br>");
document.write(number + " x 2 = " + (number * 2) + "<br>");
document.write(number + " x 3 = " + (number * 3) + "<br>");
document.write(number + " x 4 = " + (number * 4) + "<br>");
document.write(number + " x 5 = " + (number * 5) + "<br>");
document.write(number + " x 6 = " + (number * 6) + "<br>");
document.write(number + " x 7 = " + (number * 7) + "<br>");
document.write(number + " x 8 = " + (number * 8) + "<br>");
document.write(number + " x 9 = " + (number * 9) + "<br>");
document.write(number + " x 10 = " + (number * 10) + "<br>");

document.write("<br>");

var celsiusTemperature = +(prompt("Enter temperature in Celsius:"));
var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;
document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

var fahrenheitTemperature2 = +(prompt("Enter temperature in Fahrenheit:"));
var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5 / 9;
document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");

document.write("<br>");

var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = +(prompt("Enter quantity for Item 1:"));
var quantityItem2 = +(prompt("Enter quantity for Item 2:"));
var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Shopping Cart</h2>");
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges: " + shippingCharges + "<br><br>");
document.write("Total cost of your order is " + totalCost);

document.write("<br>");

var totalMarks = +(prompt("Enter total marks:"));
var marksObtained = +(prompt("Enter marks obtained:"));
var percentage = (marksObtained / totalMarks) * 100;
document.write("<h2>Marks Sheet</h2>");
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%");

document.write("<br>");

var usDollars = parseFloat(prompt("Enter the amount in US dollars:"));
var saudiRiyals = parseFloat(prompt("Enter the amount in Saudi Riyals:"));

var usdToPkrRate = 275;
var sarToPkrRate = 73.31;

var totalCurrencyInPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

document.write("<h2>Currency in PKR</h2>");

document.write("Currency in US dollars: $" + usDollars + "<br>");
document.write("Currency in Saudi Riyals: " + saudiRiyals + " SAR" + "<br>");
document.write("<br>");
document.write("Total Currency in PKR: " + totalCurrencyInPkr + "<br>");

document.write("<br>");

var number = 10;
var result = (((number + 5) * 10) / 2);

document.write("<br>");

var currentYear = new Date().getFullYear();
var birthYear = parseInt(prompt("Enter your birth year:"));

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("They are either " + age1 + " or " + age2 + " years old.");

document.write("<br>");

var currentYear = new Date().getFullYear();
var birthYear = parseInt(prompt("Enter your birth year:"));

var age = currentYear - birthYear;

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age);

document.write("<br>");

var radius = parseFloat(prompt("Enter the radius of the circle:"));

var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a circle: " + radius + "<br>");
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area);

document.write("<br>");

var favoriteSnack = prompt("Enter your favorite snack:");
var currentAge = parseInt(prompt("Enter your current age:"));
var maximumAge = parseInt(prompt("Enter your estimated maximum age:"));
var snacksPerDay = parseInt(prompt("Enter the estimated amount per day:"));

var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var snacksNeeded = daysRemaining * snacksPerDay;

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favourite Snack: " + favoriteSnack + "<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maximumAge + "<br>");
document.write("Amount of snacks per day: " + snacksPerDay + "<br>");
document.write("You will need " + snacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);
