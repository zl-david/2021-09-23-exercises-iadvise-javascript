// 06.1: Array.from

/*
 * Call `Array.from` with an array-like object
 * Nothing to change, this one's on the house! 🥂
 */
export function exercise1() {
  const arrayLike = { 0: "one", 1: "two", length: 2 };
  const arr = Array.from(arrayLike);

  return arr;
}

/*
 * ==> This exercise doesn't work in test environment,
 * ==> uncomment and run this function in the browser to see the result
 * A DOM node`s classList object can be converted
 * Wrap domNode.classList in Array.from
 */
/*export function exercise2(){ 
  const domNode = document.createElement("span");
  domNode.classList.add("some");
  domNode.classList.add("other");

  const classList = Array.from(domNode.classList);

  return classList;
}*/

/*
 * Works with function arguments
 * Wrap "arguments"
 */
export function exercise3() {
  function sum() {
    const numbers = arguments; // ← Change
    return numbers.reduce((prev, cur) => prev + cur);
  }

  return sum(1, 2, 3, 4);
}

// 06.2: Array.fill

/*
 * `fill(0)` will populate `0` into each array element
 * Nothing to change! 🤓
 */
export function exercise4() {
  const arr = new Array(3).fill(0);
  return arr;
}

/*
 * `fill()` only changes content, doesn't add new elements
 */
export function exercise5() {
  const arr = [undefined];
  return arr;
}

/*
 * second parameter to `fill()` is the position from where to start filling
 * Use `fill()` to replace `3` with `42`
 */
export function exercise6() {
  const arr = [1, 2, 3];

  return arr;
}

/*
 * Third parameter is the position where filling stops
 * Use `fill()` to replace `2` with `42`
 */
export function exercise7() {
  const fillStartAt = 1; // ← Change
  const fillEndAt = 1; // ← Change
  const arr = [1, 2, 3]; // ← Change

  return arr;
}

// 06.3: Array.find / findIndex

/*
 * Find the first cat in the list
 * Use `.find()`
 */
export function exercise8() {
  const animals = [
    { name: "Blacky", species: "dog" },
    { name: "Nelson", species: "monkey" },
    { name: "Mikado", species: "cat" },
    { name: "Bruno", species: "cat" },
  ];

  const firstCatFound = animals;

  return firstCatFound.name;
}

/*
 * find the index of the first cat in the list
 * Use `.findIndex()`
 */
export function exercise9() {
  const animals = [
    { name: "Blacky", species: "dog" },
    { name: "Nelson", species: "monkey" },
    { name: "Mikado", species: "cat" },
    { name: "Bruno", species: "cat" },
  ];

  const firstCatIndex = animals;

  return firstCatIndex;
}
