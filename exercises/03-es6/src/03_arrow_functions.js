// To do: replace regular function declarations with arrow functions. Make the functions as short as possible!
// Make sure all tests keep working

// 03.1: arrow functions

/*
 * Refactor "addOne" to an arrow function. Make as short as possible.
 */
export function exercise1() {
  const addOne = function (a) {
    return a + 1;
  };

  return addOne;
}

/*
 * Refactor "add" to an arrow function. Make as short as possible.
 */
export function exercise2() {
  const add = function (a, b) {
    return a + b;
  };

  return add;
}

/*
 * Refactor "getCat" to an arrow function. Make as short as possible.
 */
export function exercise3() {
  const getCat = function () {
    return {
      name: "Mikado",
      age: 5
    };
  };

  return getCat;
}
