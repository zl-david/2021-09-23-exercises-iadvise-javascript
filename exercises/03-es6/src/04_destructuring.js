// To do: Fix with one liners!

// 04.1: destructuring - array

/*
 * Extract value from array
 * Nothing to do, this is an example
 */
export function exercise1() {
  const [firstValue] = [1];

  return firstValue;
}

/*
 * Extract multiple values from array
 * Extract firstValue (1) and secondValue (2) from "arr", in 1 line
 */
export function exercise2() {
  const arr = [1, 2, 3, 4];

  return { firstValue, secondValue };    
}

/*
 * Extract multiple, non successive, values from array
 * Extract firstValue (1) and the fourthValue (4), in 1 line
 */
export function exercise3() {
  const arr = [1, 2, 3, 4];

  return { firstValue, fourthValue };   
}

/*
 * Extract nested values from array
 * Extract firstName, lastName and age from "person", in 1 line
 */
export function exercise4() {
  const person = [["John", "Doe"], "Antwerp", 30];

  return { firstName, lastName, age };
}

// 04.2: destructuring - object

/*
 * Extract value from object
 * Nothing to do, this is an example
 */
export function exercise5() {
  const person = { name: "John", age: 30, location: "Antwerp" };
  
  const { name } = person;

  return name;
}

/*
 * Extract multiple values from object
 * Extract name ("John") and age (30) from "person", in 1 line
 */
export function exercise6() {
  const person = { name: "John", age: 30, location: "Antwerp" };

  return { name, age }
}

/*
 * Extract nested values from object
 * Extract firstName ("John"), lastName ("Doe") and age (30) from "person", in 1 line
 */
export function exercise7() {
  const person = {
    name: { firstName: "John", lastName: "Doe" },
    age: 30,
    location: "Antwerp"
  };

  return { firstName, lastName, age }
}

/*
 * Assign an alias "personLocation" to the location property of "person"
 */
export function exercise8() {
  const person = { name: "John", age: 30, location: "Antwerp" };

  return personLocation;
}

// 04.3: destructuring - function parameters

/*
 * Extract multiple params from object
 * Add the necessary curly brackets to the parameters of the "log" function
 */
export function exercise9() {
  function log(name, age) {
    return `${name} is ${age} years old.`
  }

  const person = { name: "John", age: 30 };

  return log(person);
}

/*
 * Extract rest params from object
 * Add the necessary curly brackets to the parameters of the "log" function
 */
export function exercise10() {
  function log(name, ...rest) {
    return `${name} is ${rest.age} years old and lives in ${rest.location}.`;
  }

  const person = { name: "John", age: 30, location: "Antwerp" };

  return log(person);
}

// 04.4: destructuring - default values

/*
 * Destructuring default values for a missing array value
 * Only change left side of assignment, "b" should have default value 2
 */
export function exercise11() {
  const [, b] = [1, , 3];

  return b;
}

/*
 * Destructuring default values for a missing object value
 * Only change left side of assignment, "location" should have default value "Belgium"
 */
export function exercise12() {
  const person = { name: "John", age: 30 };

  const { location } = person;

  return location;
}

/*
 * Destructuring default values for a function parameter
 * "location" should have default value "Belgium"
 */
export function exercise13() {
  function log({ name, location }) {
    return `${name} lives in ${location}`;
  }

  const person = { name: "John", age: 30 };
  return log(person);
}
