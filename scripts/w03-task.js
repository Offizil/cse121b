/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers *///
console.log("Script loaded");


function add(number1, number2) {
    return number1 + number2;
}

function addNumbers(addNumber1, addnumber2) {
    addNumber1 = Number(document.querySelector("#add1").value);
    addnumber2 = Number(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add( addNumber1, addnumber2);
    
    // return addNumbers
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let Subtract = function(number1, number2) {
    return number1 - number2;
}

function SubtractNumbers(Subtract1, Subtract2){
    Subtract1 = Number(document.querySelector("#subtract1").value);
    Subtract2 = Number(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = Subtract(Subtract1, Subtract2);

}

document.querySelector("#subtractNumbers").addEventListener("click", SubtractNumbers);

// function Subtract = add




/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

// function MultiplyNumbers(multiplyNumbers1, multiplyNumbers2) {
//     let multiplyNumbers1 = document.querySelector("#factor1");
//     let multiplyNumbers2 = document.querySelector("#factor2");
//    

// }

const MultiplyNumbers = () => {
    const multiplyNumbers1 = Number(document.querySelector("#factor1").value);
    const multiplyNumbers2 = Number(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(multiplyNumbers1, multiplyNumbers2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", MultiplyNumbers);




/* Open Function Use - Divide Numbers */

function Divide(dividend, divisor) {
    return dividend/divisor;
}

function divideNumbers (divideNumbers1, divideNumbers2){
    divideNumbers1 = parseFloat(document.querySelector("#dividend").value);
    divideNumbers2 = parseFloat(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = Divide(divideNumbers1, divideNumbers2);

}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function TotalAmount () {
    let subtotal = parseFloat(document.querySelector("#subtotal").value);

    // let total;
    let checkbox = document.querySelector("#member");

    if (checkbox.checked) {
        subtotal = (subtotal * .80);
    } 
    document.querySelector("#total").textContent = subtotal.toFixed(2);

}

// Update the value when the button is clicked, not immediately
document.querySelector("#getTotal").addEventListener("click", TotalAmount);



/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").innerHTML = numbersArray;


/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 !== 0);

document.querySelector("#odds").innerHTML = oddNumbers

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 == 0);

document.querySelector("#evens").innerHTML = evenNumbers;

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML =  numbersArray.map(number => number *2);

/* Output Sum of Multiplied by 2 Array */
// Map: Multiply each element by 2
let multipliedArray = numbersArray.map(number => number * 2);

// Reduce: Sum the multiplied array
let sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);

// Display the result in the HTML element with ID "sumOfMultiplied"
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;

