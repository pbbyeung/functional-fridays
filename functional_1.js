/**
Functional Programming (FP)

Goals:
  - produce more understandable code
  - easier to test

Code can be found: https://github.com/PacktPublishing/Mastering-JavaScript-Functional-Programming

What is functional programming?
- Based on producting the desired result by evaluating expressions built out of functions composed together
- Pass functions around
- Don't use loops
- Skip side effects like modifying objects or global variables

Why user functional programming?
- Modular
- Understandable
- Testable
- Extensible
- Reusable

Imperative vs declarative
- focus on the what not the how
- imperative uses statements that change a program's statements
- declarative uses statements that express the logic of a computation without describing its control flow

Javascript as a functional language
- supports function programming through
  - first-class functions, anonymous functions, recursion, closures, spread
- non-FP
  - mutable objects and limits of recursion


First-Class Objects: you can do everything with functions that you can do with other objects
Recursion: A function that calls itself and continues working with the result it has received.
Closures: A function can refer to not only its local variables but alsoto everything outside that context.
Arrow Functions: Also known as anonymous functions
Spread operator: Expand an expression in places that require multiple arguments/variables

1.1. Classes as first-class objects: We saw that functions are first class objects, but did you know classes also are? (Though, of course, speaking of classes as objects does sound weird...) Study this example and see what makes it tick! Be careful: there's some purposefully weird code in it:

1.2. Factorial errors: Factorials, as we defined them, should only be calculated for non-negative integers. However, the function we wrote doesn't verify if its argument is valid or not. Can you add the necessary checks? Try to avoid repeated, redundant tests!

*/

function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
console.log(fact(5)); // 120

const fact2 = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * fact2(n - 1);
    }
};
console.log(fact2(5)); // also 120

const fact3 = n => (n === 0 ? 1 : n * fact3(n - 1));
console.log(fact3(5)); // again 120


// My solution
const factorial4 = (num, factorialMethod) => {
  if (!Number.isInteger(num) || num < 0) {
    return undefined
  } else {
  	return factorialMethod(num)
  }
}

let a = factorial4(5, fact)
console.log(a)
// test undefined
let b = factorial4(undefined, fact)
console.log(b)
// test bool
let c = factorial4(true, fact)
console.log(c)
// test negative
let d = factorial4(-5, fact)
console.log(d)
// test non int
let e = factorial4(5.1, fact)
console.log(e)
// First approach was to add this check on top of every method


// 1.3. Climbing factorial: Our implementation of factorial starts multiplying by n, then by n-1, then n-2, and so on., in what we could call a downward fashion. Can you write a new version of the factorial function, that will loop upwards?
const factorial_ascending = (num) => {
  const start = 1
  const factorial_helper = (num, start) => {
    if (num <= start) {
      return start
    } else {
      return start * factorial_helper(num, start + 1)
    }
  }
  return factorial_helper(num, start)
}

let a = factorial4(5, factorial_ascending)
console.log(a)

15 min summary
35 min problems/solutions
10 min discussion/apply to our code/Questions


Questions & find examples in current code for improvement.
discussion:
is ruby a functional language?
