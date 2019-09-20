/**
Functional Programming (FP)

Doing an action only once example.
Solution 1: Inform the user
Solution 2: Using global flag
Solution 3: Removing the handler for doing the action
  - Cons: tightly coupled code, must remember to reset the handler, hard to test
Solution 4: Change the handler
Solution 5: Disable the button
Solution 6: Redefine the handler
  - Cons: hard to test and restore the functionality
Solution 7: Use a local flag

- The original function should do that thing and no other
- Minimal modification to the original function
- New function to call the original one once only
- General soluion can be applied to any number of original functions

**/

2.1
const once = f => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    }
  };
};

const once = f => {
  return (...args) => {
    f && f(...args);
    f = null;
  }
}

2.2

const onceAndAfter = (f, g = noop) => {
  let done = false;
  return (...args) => {
    if (!done) {
      done = true;
      f(...args);
    } else {
      g(...args);
    }
  };
};

const alternator = (f, g) => {
 return (...args) => {
   f(...args);
   let temp = f;
   f = g;
   g = temp;
 }
}

2.3

const thisManyTimes = (fn, n) => {
  return (...args) => {
    if (n > 0) {
      n -= 1;
      return fn(...args);
    }
  }
}
