/**
Functional Programming (FP)

Goals:
- Examine key ways of defining functions in JS
- Currying
- Injection, Callbacks, Promises
- Polyfilling and stubbing
- Immediate invocation schemes

Lambda is where the variable after the lambda character is the parameter of the function and the expression is after the dot.

Defining functions in javascrip

named function: function first(...) {};
anonymous function: var second = function(...) {};
named function expression: var third = function someName(...) {};
immediately invoked expression: var fourth = (function() {... })();
function constructor: var fifth = new Function(...);
arrow function: var sixth = (...) => {};

arrow functions
  - can implicitly return a value
  - value of this is not bound
  - no arguments objects

lambda
  - functions only consist of a result

spread
  - by writing fn(...args) we immediately see that our new function receives zero or more arguments
    - instead of doing Array.prototype.slice.call(arguments) and the .apply(null, argArray)

currying
  - applying only with one parameter
  - const altSum3 = x => y => z => x + y + z;
    - altSum3(1)(2)(3) => 6

hoisting
  - moving all definitions to the top fo the current scope happens when you define a function like
  function abc(...) {} but not when you define a function like var abc = function(...) {}.
    - the latter hoists the variable but not the definition

React Reducer
 - handles actions through switchcase
  - you can store functions with a dispatch table like
  const dispatchTable = {
    CREATE: (state, action) => {
        // update state, generating newState,
        // depending on the action data
        // to create a new item
        return newState;
    },
    DELETE: (state, action) => {
        // update state, generating newState,
        // after deleting an item
        return newState;
    },
    UPDATE: (state, action) => {
        // update an item,
        // and generate an updated state
        return newState;
        }
    };
  - and call it like:
  function doAction2(state = initialState, action) {
    return dispatchTable[action.type]
        ? dispatchTable[action.type](state, action)
        : state;
  }


  Pointfree style/ Tacit stycle
    - you never specify the arguments for each function

  Injection
    - passing functions as parameeters like in .sort()

  Callbacks, promises, and continuations
    - asynchronous calls that get called when completed.

**/
