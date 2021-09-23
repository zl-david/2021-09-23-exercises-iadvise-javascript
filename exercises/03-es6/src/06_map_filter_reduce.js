// To do: Make the imperative, declarative
// by making use of array methods map, filter and reduce.
//
// Reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const heroes = [
  { name: "Hulk", strength: 90000, gender: "m" },
  { name: "Spider-Man", strength: 25000, gender: "m" },
  { name: "Hawkeye", strength: 136, gender: "m" },
  { name: "Thor", strength: 100000, gender: "m" },
  { name: "Black Widow", strength: 136, gender: "f" },
  { name: "Vision", strength: 5000, gender: "m" },
  { name: "Scarlet Witch", strength: 60, gender: "f" },
  { name: "Mystique", strength: 120, gender: "f" },
  { name: "Namora", strength: 75000, gender: "f" },
  { name: "Darkwing Duck", strength: 10, gender: "m" },
];

const hiddenIdentities = ["Hulk", "Spider-Man", "Darkwing Duck"];

/*
 * Give me a list with heroes stronger than "500"
 * Make the imperative implementation inside the "imperative" function declarative by making use of map, filter or reduce.
 * Write your solution inside the "declarative" function
 */
export function exercise1() {
  const imperative = () => {
    const result = [];
    for (let i = 0; i < heroes.length; i++) {
      if (heroes[i].strength >= 500) {
        result.push(heroes[i]);
      }
    }
    return result;
  };

  const declarative = () => {};

  return {
    imperative: imperative(),
    declarative: declarative(),
  };
}

/*
 * Give me a list of all hero names
 * Make the imperative implementation inside the "imperative" function declarative by making use of map, filter or reduce.
 * Write your solution inside the "declarative" function
 */
export function exercise2() {
  const imperative = () => {
    const result = [];
    for (let i = 0; i < heroes.length; i++) {
      result.push(heroes[i].name);
    }
    return result;
  };

  const declarative = () => {};

  return {
    imperative: imperative(),
    declarative: declarative(),
  };
}

/*
 * Give me a list of all hero names and whether they have a hidden identity
 * Make the imperative implementation inside the "imperative" function declarative by making use of map, filter or reduce.
 * Write your solution inside the "declarative" function
 */
export function exercise3() {
  const imperative = () => {
    const result = [];
    for (let i = 0; i < heroes.length; i++) {
      result.push({
        name: heroes[i].name,
        hidden: hiddenIdentities.includes(heroes[i].name),
      });
    }
    return result;
  };

  const declarative = () => {};

  return {
    imperative: imperative(),
    declarative: declarative(),
  };
}

/*
 * Sum up all hero strength
 * Make the imperative implementation inside the "imperative" function declarative by making use of map, filter or reduce.
 * Write your solution inside the "declarative" function
 */
export function exercise4() {
  const imperative = () => {
    let result = 0;

    for (let i = 0; i < heroes.length; i++) {
      result += heroes[i].strength;
    }
    return result;
  };

  const declarative = () => {};

  return {
    imperative: imperative(),
    declarative: declarative(),
  };
}

/*
 * Give me the combined strength of all hero's with a hidden identity
 */
export function exercise6() {
  const result = heroes; // ← To implement

  return result;
}

/*
 * Give me the combined strength of all superhumans with a hidden identity
 */
export function exercise7() {
  // IMPORTANT: A superhuman is a hero with a strength >= 500
  const result = heroes; // ← To implement

  return result;
}

/*
 * Give me the names of all female superhumans
 */
export function exercise8() {
  // IMPORTANT: A superhuman is a hero with a strength >= 500
  const result = heroes; // ← To implement

  return result;
}
