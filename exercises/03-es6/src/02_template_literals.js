// 02.1: template literals basics

/*
 * Nothing to change here, it's just an example.
 * Using template literals, you don't have to escape quotes in texts.
 */
export function exercise1() {
  const templateString = `You're gonna need a bigger boat.`;
  return templateString;
}

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *   to make the value of templateStringES6 the same as the the value of templateString 
 */
export function exercise2() {
  const sayMyName = "Heisenberg";

  const templateString = 'My name is' + sayMyName;
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *    to make the value of templateStringES6 the same as the the value of templateString 
 */
export function exercise3() {
  function sayMyName(a, b) {
    return "Heisenberg";
  }

  const templateString = `My name is` + sayMyName();
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}


// 02.2: template literals multiline

/*
 * Use template literals to print the lastName on a new line: John
 *                                                            Doe
 */
export function exercise4() {
  const firstName = "John";
  const lastName = "Doe";

  const templateString = firstName + "\n" + lastName;
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}


