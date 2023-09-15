// Look at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/
function convertToString(number) {
  number = prompt('enter the number');
  return `the string is ${number}`;
}
console.log(convertToString());

// - Write a Function Decleration
function convertToString(number) {
  return String(number);
}

// - Write a Function Expression
let convertToString = function (number) {
  return String(number);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (number) => String(number);

// - Write an Arrow Function with curly brackets
let convertToString = (number) => {
  return String(number);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
`typeof returnValue is "string"`;

/* 1. Add one to the given value
 
 Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).
 
 Do the following with above problem.
 */
function addOne(numA) {
  number = prompt('enter the number');
  return numA + 1;
}
console.log(addOne());

// - Write a Function Declarations
function addOne(numA) {
  return numA + 1;
}

// - Write a Function Expression
let addOne = function (numA) {
  return numA + 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let addOne = (numA) => numA;

// - Write an Arrow Function with curly brackets
let addOne = (numA) => {
  return numA + 1;
};

// - Execute the function 31
addOne(2);

// - Execute the function and store the return value in a variable.
let returnValue = addOne(1, 2);

// - What is the typeof returnValue
`typeof returnValue is Number`;

/* 2. Subtract one
 
 Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)
 
 Do the following with above problem.
 */
function substractOne(numA) {
  return numA - 1;
}
console.log(substractOne());

// - Write a Function Declarations
function substractOne(numA) {
  return numA - 1;
}

// - Write a Function Expression
let substractOne = function (numA) {
  return numA - 1;
};

// - Write an Arrow Function without curly brackets(if possible)
let substractOne = (numA) => numA;

// - Write an Arrow Function with curly brackets
let substractOne = (numA) => {
  return numA - 1;
};

// - Execute the function 31
substractOne(2);

// - Execute the function and store the return value in a variable.
let returnValue = substractOne(1);

// - What is the typeof returnValue
`typeof returnValue is Number`;

/* 3. Add two numbers
 
 Write a function named `sum` that accepts two numbers and returns the sum of them.
 
 Do the following with above problem.
 */

function sum(numA, numB) {
  return numA + numB;
}
console.log(sum());
// - Write a Function Declarations
function sum(numA, numB) {
  return numA + numB;
}

// - Write a Function Expression
let sum = function (numA, numB) {
  return numA + numB;
};

// - Write an Arrow Function without curly brackets(if possible)
let sum = (numA, numB) => numA + numB;

// - Write an Arrow Function with curly brackets
let sum = (numA, numB) => {
  return numA + numB;
};

// - Execute the function 31
sum(2);

// - Execute the function and store the return value in a variable.
let returnValue = sum(1, 2);

// - What is the typeof returnValue
`typeof returnValue is Number`;

/* 4. Square of the given value
 
 Write a function named `square` that accepts a number and returns the square of the number.
 
 Do the following with above problem.
 */
function square(num) {
  return num * num;
}
console.log(square());
// - Write a Function Declarations
function square(num) {
  return num * num;
}

// - Write a Function Expression
let square = function (num) {
  return num * num;
};

// - Write an Arrow Function without curly brackets(if possible)
let square = (num) => num * num;

// - Write an Arrow Function with curly brackets
let square = (num) => {
  return num * num;
};

// - Execute the function 31
square(2);

// - Execute the function and store the return value in a variable.
let returnValue = square(1, 2);

// - What is the typeof returnValue
`typeof returnValue is Number`;

/* 5. Find isGreater
 
 Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.
 
 Do the following with above problem.
 */
function isGreater(x, y) {
  if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
}

// - Write a Function Declaration
function isGreater(x, y) {
  if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
}

// - Write a Function Expression
let isGreater = function (x, y) {
  if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
};

// - Write an Arrow Function without curly brackets(if possible)

// - Write an Arm row Function with curly brackets
let isGreater = (x, y) => {
  if (x > y) {
    return `${x} is greater than ${y}`;
  } else {
    return `${y} is greater than ${x}`;
  }
};
// - Execute the function
isGreater(2, 3);
// - Execute the function and store the return value in a variable
let returnValue = isGreater(1, 2);
// - What is the typeof returnValue
`typeof returnValue`;
/* 6.
 
 Write a function named `oddOrEven` that accepts a`number` and returns
 
   - `Number is odd` for odd number
   - `Number is even` for even number.
 
 Do the following with above problem.
 */
function oddOrEven(number) {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}

// - Write a Function Declaration
function oddOrEven(number) {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
}
// - Write a Function Expression
let oddOrEven = function (number) {
  if (number % 2 == 0) {
    return `${number} is even`;
  } else {
    return `${number} is odd`;
  }
};

// - Write an named Function Expression

// - Write an Arrow Function without curly brackets (hint: use ternary operator)
let oddOrEven = (number) =>
  number % 2 == 0 ? `${number} is even` : `${number} is odd`;

// - Write an Arrow Function with curly brackets
let oddOrEven = (number) => {
  number % 2 == 0 ? `${number} is even` : `${number} is odd`;
};
// - Execute the function
oddOrEven();
// - Execute the function and store the return value in a variable
let returnValue = oddOrEven();
// - What is the typeof returnValue
`typeof returnValue is Number`;
