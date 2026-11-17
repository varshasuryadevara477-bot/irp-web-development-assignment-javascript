"use strict";

// ========================================
// PART 1: Types & Coercion
// ========================================

// "5" + 2 gives "52" because + joins strings when one value is a string.
// "5" - 2 gives 3 because subtraction converts the string into a number.

// typeof null gives "object" because of a historical JavaScript behavior.

function parseAmount(input) {
  // A missing amount is not a valid input.
  if (input === null || input === undefined) {
    throw new Error("Amount is required");
  }

  // Only strings and numbers are accepted.
  if (typeof input !== "string" && typeof input !== "number") {
    throw new Error("Invalid input type");
  }

  // Remove spaces around a string before converting it.
  if (typeof input === "string") {
    input = input.trim();
  }

  // Number("") becomes 0, so reject an empty string first.
  if (input === "") {
    throw new Error("Amount cannot be empty");
  }

  const amount = Number(input);

  // Number("abc") and Number("12.5.3") produce NaN.
  if (Number.isNaN(amount)) {
    throw new Error("Please enter a valid number");
  }

  if (amount <= 0) {
    throw new Error("Amount must be greater than zero");
  }

  return amount;
}

// Test every input using try/catch.
const testInputs = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

for (let i = 0; i < testInputs.length; i++) {
  try {
    const result = parseAmount(testInputs[i]);
    console.log("Valid amount:", result);
  } catch (error) {
    console.log("Error:", error.message);
  }
}


// ========================================
// PART 2: Scoping & Hoisting
// ========================================

// STEP 1: Main Declarations

// The bank name does not change, so const is appropriate.
const BANK_NAME = "JS National Bank";

// The transaction count changes, so let is appropriate.
let transactionCounter = 0;

console.log("Bank Name:", BANK_NAME);
transactionCounter++;
console.log("Transaction Count:", transactionCounter);


// STEP 2: HOISTING DEMO

// 1. var is hoisted and initialized with undefined.
console.log("Var value:", bankAmount);
var bankAmount = 500;

// 2. let is in the Temporal Dead Zone until its declaration is reached.
try {
  console.log(customerName);
  let customerName = "Varsha";
} catch (error) {
  console.log("Let Error:", error.message);
}

// 3. Function declarations are hoisted with their function body.
announce();

function announce() {
  console.log("Welcome to JS National Bank");
}

// 4. A var function-expression variable is undefined before assignment.
try {
  notify();
} catch (error) {
  console.log("Function Expression Error:", error.message);
}

var notify = function () {
  console.log("Notification sent");
};

// During execution-context creation, declarations are registered.
// During the execution phase, statements run in order and assignments happen.


// STEP 3: The Asynchronous Loop Bug

// var shares one function/global-scoped variable across all iterations.
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var loop:", i);
  }, 1000);
}

// let creates a fresh lexical binding for each loop iteration.
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let loop:", j);
  }, 1000);
}
