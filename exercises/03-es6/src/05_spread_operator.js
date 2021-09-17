// 05.1: Spread syntax

/*
 * Expands the items of an array by prefixing it with '...'
 * Nothing to do here, this is an example
 */
export function exercise1(){ 
  const middle = [1, 2, 3];
  const arr = [0, ...middle, 4]; 

  return arr;
}

/*
 * An empty array expanded is the same as no item
 * Spread the empty array
 */
export function exercise2(){ 
  const arr = [0, [], 1];

  return arr;
}

/*
 * Prefix with `...` to spread as function params
 * callback expect 2 parameters. 
 * Spread magicNumbers in the "callback" argument.
 */
export function exercise3(callback){ 
  const magicNumbers = [1, 2];

  callback(magicNumbers);
}

// 05.2: Rest syntax

/*
 * Collect remaining items
 * Spread "rest" to collect the remaining items
 */
export function exercise4(){ 
  const [a, b, rest] = [1, 2, 3, 4, 5];

  return rest;
}

/*
 * Rest syntax to collect all arguments
 * Spread "args" in the function parameter to collect
 *  an unknown amount of function parameters 
 */
export function exercise5(){ 
  const fn = (args) => {
    return args;
  };

  return fn(55, 42, 78);
}

// 05.3: Rest + Spread

/*
 * Use `...` to both expand all items and collect them
 * Change the left hand side of the assignment
 */
export function exercise6(){ 
  const [...rest] = [...[, 1, 2, 3, 4, 5]];

  return rest;
}

/*
 * Rest syntax must be last in an array, spread can be used in any place
 * Add the spread operator to the right hand side of the assignment
 */
export function exercise7(){ 
  const [a, b, ...rest] = [1, [2, 3], 4, 5];

  return {
    a,
    b,
    rest
  };
}

// 05.4: Rest & Spread for objects

/*
 * Merge 2 objects
 * Nothing to change, this is an example
 */
export function exercise8(){ 
  const obj1 = { firstName: "John" };
  const obj2 = { lastName: "Doe" };

  const merged = {
    firstName: obj1.firstName,
    lastName: obj2.lastName
  }

  const mergedES6 = { 
    ...obj1, 
    ...obj2 
  };

  return { merged, mergedES6 };
}

/*
 * Merging overrides existing properties
 * Merge john and jane in the "mergedES6" object. 
 * The merged object will have all properties of john, 
 *    but the firstName and gender of jane
 */
export function exercise9(){ 
  const john = { firstName: "John", gender: "m", age: 30, location: "Belgium" };
  const jane = { firstName: "Jane", gender: "f" };

  const merged = { 
    firstName: jane.firstName, 
    gender: jane.gender, 
    age: john.age, 
    location: john.location
  }

  const mergedES6 = {};

  return { merged, mergedES6 };
}

/*
 * Get remaining properties
 */
export function exercise10(){ 
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };

  const { a, rest } = obj; 

  return rest;
}