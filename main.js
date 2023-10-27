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
document.write("You will need " + snacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + "<br><br>");


document.write("<br>");


// MATH EXPRESSIONS CHAPTER #6 to 9

var a = 10;

document.write("The value of a is: " + a + "<br><br>");

document.write("The value of ++a is: " + (++a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a++ is: " + (a++) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of --a is: " + (--a) + "<br>");
document.write("Now the value of a is: " + a + "<br><br>");

document.write("The value of a-- is: " + (a--) + "<br>");
document.write("Now the value of a is: " + a);


document.write("<br>"); document.write("<br>"); document.write("<br>");


// Initialize variables a and b
var a = 2, b = 1;

// Evaluate the expression step by step
var step1 = --a; // Decrement a by 1 (a becomes 1)
document.write("Step 1: --a = " + step1 + " (a is now " + a + ")<br>");

var step2 = --a - --b; // Decrement a by 1 (a becomes 0) and decrement b by 1 (b becomes 0)
document.write("Step 2: --a - --b = " + step2 + " (a is now " + a + ", b is now " + b + ")<br>");

var step3 = --a - --b + ++b; // Decrement a by 1 (a becomes -1), decrement b by 1 (b becomes -1), and then increment b by 1 (b becomes 0)
document.write("Step 3: --a - --b + ++b = " + step3 + " (a is now " + a + ", b is now " + b + ")<br>");

var step4 = --a - --b + ++b + b--; // Decrement a by 1 (a becomes -2), decrement b by 1 (b becomes -1), increment b by 1 (b becomes 0), and then use the current value of b in the expression and decrement it afterwards (b becomes -1)
document.write("Step 4: --a - --b + ++b + b-- = " + step4 + " (a is now " + a + ", b is now " + b + ")<br><br>");

document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");

var result = step4;
document.write("result is " + result + "<br>");

document.write("<br>"); document.write("<br>"); document.write("<br>");

var userName = prompt("Please enter your name:");
alert("Hello, " + userName + "! Welcome!");


document.write("<br>");

var number = +prompt("Please enter a number:") || 5;

document.write("<h2>Multiplication Table of " + number + "</h2>");
document.write(number + " x 1 = " + number * 1 + "<br>");
document.write(number + " x 2 = " + number * 2 + "<br>");
document.write(number + " x 3 = " + number * 3 + "<br>");
document.write(number + " x 4 = " + number * 4 + "<br>");
document.write(number + " x 5 = " + number * 5 + "<br>");
document.write(number + " x 6 = " + number * 6 + "<br>");
document.write(number + " x 7 = " + number * 7 + "<br>");
document.write(number + " x 8 = " + number * 8 + "<br>");
document.write(number + " x 9 = " + number * 9 + "<br>");
document.write(number + " x 10 = " + number * 10 + "<br>");


document.write("<br>"); document.write("<br>"); document.write("<br>");

// Step 1: Take three subjects names from the user and store them in variables
var subject1 = prompt("Enter the first subject name:");
var subject2 = prompt("Enter the second subject name:");
var subject3 = prompt("Enter the third subject name:");

// Step 2: Total marks for each subject is 100, store it in another variable
var totalMarks = 100;

// Step 3: Take obtained marks for the first subject from the user and store it in a variable
var obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));

// Step 4: Take obtained marks for the remaining 2 subjects from the user and store them in variables
var obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Step 5: Calculate total marks and percentage
var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Step 6: Display the result in the browser using a table
document.write("<div class='styled-table'><h2 class='resultHeading'>Result</h2>");
document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
document.write("<tr><td colspan='2'>Total</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td colspan='2'>Percentage</td><td>" + totalPercentage.toFixed(2) + "%</td></tr>");
document.write("</table></div>");


document.write("<br>"); document.write("<br>"); document.write("<br>");


var cityName = prompt("Enter the city name:");
var lowercaseCity = cityName.toLowerCase();

if (lowercaseCity === "karachi") {
    alert("Welcome to the city of lights, Karachi!");
} else if (lowercaseCity === "lahore") {
    alert("Welcome to the heart of Pakistan, Lahore!");
} else if (lowercaseCity === "islamabad") {
    alert("Welcome to the beautiful capital, Islamabad!");
} else if (lowercaseCity === "peshawar") {
    alert("Welcome to the city of flowers, Peshawar!");
} else if (lowercaseCity === "quetta") {
    alert("Welcome to the fruit garden of Pakistan, Quetta!");
} else if (lowercaseCity === "multan") {
    alert("Welcome to the city of saints, Multan!");
} else if (lowercaseCity === "sialkot") {
    alert("Welcome to the sports manufacturing hub, Sialkot!");
} else if (lowercaseCity === "gujranwala") {
    alert("Welcome to the city of wrestlers, Gujranwala!");
} else if (lowercaseCity === "sargodha") {
    alert("Welcome to the city of eagles, Sargodha!");
} else {
    alert("Welcome to " + cityName + ", a city of rich heritage in Pakistan!");
}



document.write("<br>"); document.write("<br>"); document.write("<br>");



var gender = prompt("Enter your gender (male or female):").toLowerCase();

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}


let signalColor1, signalColor2, signalColor3;
let message1, message2, message3;

signalColor1 = prompt("Enter the traffic signal color (Red, Yellow, or Green) for the 1st time:");

if (signalColor1.toLowerCase() === "red") {
    message1 = "Must Stop";
} else if (signalColor1.toLowerCase() === "yellow") {
    message1 = "Ready to move";
} else if (signalColor1.toLowerCase() === "green") {
    message1 = "Move now";
} else {
    message1 = "Invalid color";
}

signalColor2 = prompt("Enter the traffic signal color (Red, Yellow, or Green) for the 2nd time:");

if (signalColor2.toLowerCase() === "red") {
    message2 = "Must Stop";
} else if (signalColor2.toLowerCase() === "yellow") {
    message2 = "Ready to move";
} else if (signalColor2.toLowerCase() === "green") {
    message2 = "Move now";
} else {
    message2 = "Invalid color";
}

signalColor3 = prompt("Enter the traffic signal color (Red, Yellow, or Green) for the 3rd time:");

if (signalColor3.toLowerCase() === "red") {
    message3 = "Must Stop";
} else if (signalColor3.toLowerCase() === "yellow") {
    message3 = "Ready to move";
} else if (signalColor3.toLowerCase() === "green") {
    message3 = "Move now";
} else {
    message3 = "Invalid color";
}

// Create a table inside a div with a class for styling
document.write("<div class='styled-table'> <h2 class='trafficHeading'>Traffic Signals Instructions</h2> <table border='1'>");
document.write("<tr><th>Signal color</th><th>Message</th></tr>");
document.write("<tr><td>" + signalColor1 + "</td><td>" + message1 + "</td></tr>");
document.write("<tr><td>" + signalColor2 + "</td><td>" + message2 + "</td></tr>");
document.write("<tr><td>" + signalColor3 + "</td><td>" + message3 + "</td></tr>");
document.write("</table></div>");

// document.getElementById("color1").innerText = signalColor1;
// document.getElementById("message1").innerText = message1;
// document.getElementById("color2").innerText = signalColor2;
// document.getElementById("message2").innerText = message2;
// document.getElementById("color3").innerText = signalColor3;
// document.getElementById("message3").innerText = message3;



document.write("<br>"); document.write("<br>"); document.write("<br>");



const remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

if (remainingFuel >= 0 && remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else if (remainingFuel >= 0.25 && remainingFuel <= 100) {
    alert("You have enough fuel in your car. Have a safe journey!");
} else {
    alert("Invalid input. Please provide a valid fuel amount.");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}



document.write("<br>"); document.write("<br>"); document.write("<br>");




// Input marks obtained in three subjects and total marks
var marksSubject1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
var marksSubject2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
var marksSubject3 = parseFloat(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate the total marks obtained
var totalObtainedMarks = marksSubject1 + marksSubject2 + marksSubject3;

// Calculate the percentage
var percentage = (totalObtainedMarks / totalMarks) * 100;

// Determine the grade and remarks
var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

// Display the mark sheet heading and results on the webpage
document.write("<div class='styled-table'> <h2 class='markSheetHeading'>Marks Sheet</h2> <table border='1'>");
document.write("<tr><td>Total marks:</td><td>" + totalMarks + "</td></tr>");
document.write("<tr><td>Percentage:</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td> Marks obtained: </td><td>" + percentage.toFixed(2) + "</td></tr>");
document.write("<tr><td>Grade:</td><td>" + grade + "</td></tr>");
document.write("<tr><td>Remarks:</td><td>" + remarks + "</td></tr>");
document.write("</table></div>");




document.write("<br>"); document.write("<br>"); document.write("<br>");




// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check the user's guess
if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer. The secret number was " + secretNumber);
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber);
}




document.write("<br>"); document.write("<br>"); document.write("<br>");




// Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(userNumber)) {
    alert("Please provide a valid number.");
} else {
    // Check if the number is divisible by 3
    if (userNumber % 3 === 0) {
        alert(userNumber + " is divisible by 3.");
    } else {
        alert(userNumber + " is not divisible by 3.");
    }
}



document.write("<br>"); document.write("<br>"); document.write("<br>");



// Prompt the user to enter a number
var userNumber = parseInt(prompt("Enter a number:"));

// Check if the input is a valid number
if (isNaN(userNumber)) {
    alert("Please provide a valid number.");
} else {
    // Check if the number is Even
    if (userNumber % 2 === 0) {
        alert(userNumber + " is an even number.");
    } else {
        alert(userNumber + " is an odd number.");
    }
}




document.write("<br>"); document.write("<br>"); document.write("<br>");




// Prompt the user to enter the temperature
var temperature = parseInt(prompt("Enter the temperature:"));

// Check the temperature and display a message
if (!isNaN(temperature)) {
    if (temperature > 50) {
        alert("Please provide a valid temperature.");
    } else if (temperature > 40) {
        alert("It is too hot outside.");
    } else if (temperature > 30) {
        alert("The weather today is normal.");
    } else if (temperature > 20) {
        alert("Today's weather is cool.");
    } else if (temperature > 10) {
        alert("OMG! Today's weather is so cool.");
    } else {
        alert("OMG! It's very cold outside.");
    }
} else {
    alert("Please provide a valid temperature.");
}




document.write("<br>"); document.write("<br>"); document.write("<br>");




// Prompt the user to enter the first number
var firstNumber = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
var secondNumber = parseFloat(prompt("Enter the second number:"));

// Prompt the user to choose an operation
var operation = prompt("Choose an operation (+, -, *, /, %):");

// Check if the inputs are valid numbers
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Perform the operation based on the user's choice
    if (operation === "+") {
        var result = firstNumber + secondNumber;
        alert("Result: " + result);
    } else if (operation === "-") {
        var result = firstNumber - secondNumber;
        alert("Result: " + result);
    } else if (operation === "*") {
        var result = firstNumber * secondNumber;
        alert("Result: " + result);
    } else if (operation === "/") {
        if (secondNumber === 0) {
            alert("Error: Division by zero is not allowed.");
        } else {
            var result = firstNumber / secondNumber;
            alert("Result: " + result);
        }
    } else if (operation === "%") {
        if (secondNumber === 0) {
            alert("Error: Modulo by zero is not allowed.");
        } else {
            var result = firstNumber % secondNumber;
            alert("Result: " + result);
        }
    } else {
        alert("Invalid operation. Please choose one of the following: +, -, *, /, %");
    }
} else {
    alert("Please provide valid numbers for the calculation.");
}