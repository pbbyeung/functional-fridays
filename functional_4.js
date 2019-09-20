/**
Functional Programming (FP)

Goals:
  - recognize the problems implied by side effects
  - show advantages of pure functions
  - describe main causes of impure functions
  - find ways to minimize number of impure functions
  - testing both

Pure functions:
  - Given the same arguments, the function always calculates and returns the same result
    - ie idempotent function
  - When calculating its result, the function doesn't cause any observable side effect

Side effects:
  - some change in state, or some interaction with outside elements that occur during execution
  - Changing global variables.
  - Mutating objects received as arguments.
  - Doing any kind of I/O, such as showing an alert message or logging some text.
  - Working with, and changing, the filesystem.
  - Updating a database.
  - Calling a web service.
  - Querying or modifying the DOM.
  - Triggering any external process.

Impure functions caused by
  - Global State: referencing variables outside of scope
  - Argument mutation e.g. .pop()
  - .random()

Benefits of pure functions:
  - doesn't matter order of execution
  - can apply memoization
  - self documenting
  - easy to test with predictable results

Avoiding impure functions:
  - avoid the usage of state
  - update the state by creating a new version and returning it
    - used in Redux users
  - inject the required function in the call when a function needs to call an impure function
      const getRandomFileName2 = (fileExtension = "", randomLetterFunc) => {
        const NAME_LENGTH = 12;
        let namePart = new Array(NAME_LENGTH);
        for (let i = 0; i < NAME_LENGTH; i++) {
            namePart[i] = randomLetterFunc();
        }
        return namePart.join("") + fileExtension;
      };
**/

4.1 const fib2 = n => (n < 2 ? n : fib2(n - 2) + fib2(n - 1));
test
fib2(0) # 0
fib2(1) # 1

4.2
const fib4 = (n, a = 0, b = 1) => (n === 0 ? a : fib4(n - 1, b, a + b));
fib4(6, 0, 1)
# fib(5, 1, 1)
# fib(4, 1, 2)
# fib(3, 2, 3)
# fib(2, 3, 5)
# fib(1, 5, 8)
# fib(0, 8, 5) = 8

4.3 make copies and compare the sorted results

4.4
