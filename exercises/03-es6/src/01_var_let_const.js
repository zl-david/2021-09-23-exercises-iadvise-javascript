// to do: Replace var/let/const with the correct var/let/const to fix the unit tests

// 01.1: var or let

/*
 * Remember: "let" is block scoped. "var" isn't.
 * Fruit "banana" gets overwritten by "pear", we don't want that! 
 * Make this code more robust, by changing 1 "var" to "let".
 */
export function exercise1() {
  var fruit = "banana";

  if (true) {
    var fruit = "pear";
  }

  return fruit;
}

/*
 * Remember: "let" is block scoped.
 * How can we return the value of "i"? 
 * Currently "i" lives only in the scope of the for-loop
 */
export function exercise2() {
  for (let i = 0; i < 10; i++) {
  }

  return i;
}

/*
 * Remember: "let" is block scoped.
 * How can we return the value of "fruit"? 
 */ 
export function exercise3() {
  if (true) {
    let fruit = "pear";
  }

  return fruit;
}


// 01.2: var or const

/*
 * Using "var" is discouraged: it makes it possible to change a variable in another function,
 * leading to unexpected bugs.
 * Improve this code by using const.
 */
export function exercise4() {
  var constNum = 0;

  function increaseConstNum() {
    constNum = 1;
  }

  return increaseConstNum;
}

/*
 * Using "const" doesn't mean you can't change an object's property after it has been set.
 * "const" only prevents you from assigning the variable to another value.
 * You can test this changing the color to "black" after it has been assigned to yellow.
 */
export function exercise5() {
  const banana = { color: "yellow" }; // ← Don't change this line

  return banana.color;
}


// 01.3: Extra

/*
 * Change "var" to "let", and see how it impacts the value of "i" inside the callbacks.
 */
export function exercise6() {
  const callbacks = [];

  for (var i = 0; i < 10; i++) {
    callbacks.push(function () {
      return i;
    });
  }

  return callbacks;
}

/*
 * The unit test expects the second item to be an apple, not a banana.
 * "fruit" is a const, but it doesn't mean you can't change items in the array.
 * Replace the "banana" with an "apple"
 */
export function exercise7() {
  const fruit = ["kiwi", "banana"]; // ← Don't change this line

  return fruit[1];
}