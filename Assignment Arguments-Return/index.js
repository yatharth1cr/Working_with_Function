/*
1. Create a function named `sayHello` that that accepts a parameter `name` and alert `Hello [name]!`.
*/
function sayhello(name = 'user') {
  alert(`Hello ${name}`);
}
sayhello();
/*
  2. Create a function named `getFullName` that accepts two parameter `firstName` and `lastName` and returns
  fullName.
  
  Example:
    getFullName("John", "Snow"); // "John Snow"
    getFullName("Nelson", "Mandela"); // "Nelson Mandela"
  */

function getFullName(firstName = 'hello', lastName = 'user') {
  return `${firstName} ${lastName}`;
}

getFullName();
/*
  3. Create a function named `addTwoNumbers` that accepts two numbers i.e `firstNum` and `secondNum` and returns
  the sum of both numbers. If user passes any data other then numbers alert a message saying `Enter Valid Input`
  
  Example:
  addTwoNumbers(10, 22); // 32
  addTwoNumbers(20, 32); // 32
  addTwoNumbers(10, "100"); // Alert Enter Valid Input
  */

function addTwoNumbers(firstNum, secondNum) {
  if (isNaN(firstNum) == false && isNaN(secondNum) == false) {
    return firstNum + secondNum;
  } else {
    return 'enter valid input';
  }
}
addTwoNumbers();

/*
  4. Create a function named `calc` which accepts three parameter `numA`, `numB` and `operation`. Operation
  can only be one of these `add, sub, mul, div`. Based on the operator return the value. If the `numA` or `numB`
  is of any other data type alert `Enter Valid Input`
  
  Example:
  
  calc(10, 20, 'add'); // 30
  calc(20, 10, 'sub'); // 10
  calc(20, 10, 'mul'); // 200
  */
function calc(numA, numB, operation) {}

function cal(numA, numB, operation) {
  if (isNaN(numA) == false && isNaN(numB) == false) {
    switch (operation) {
      case 'add':
        return numA + numB;
      case 'sub':
        return numA - numB;
      case 'mul':
        return numA * numB;
      case 'div':
        return numA / numB;
      default:
        return 'enter valid operation';
    }
  } else {
    return 'enter valid input';
  }
}
cal();
