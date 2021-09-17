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


// 02.3: Extra

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *    to make the value of templateStringES6 the same as the the value of templateString 
 * What do you think? Is it more readable?
 */
export function exercise5() {
  const a = 2;
  const b = 3;

  const templateString = a + " x " + b + " = " + a * b + ", not " + (a * b - 2);
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}

/*
 * Implement getCssEs6. It should have the same output as getCss, but in 1 template literal
 */
export function exercise6() {
  function getCssEs6(isLargeScreen, isCollapsed) {
    const templateString = ``;

    return templateString;
  }

  function getCss(isLargeScreen, isCollapsed) {
    var classes = "header ";
    classes += isLargeScreen
      ? ""
      : isCollapsed
      ? "icon-expander"
      : "icon-collapser";

    return classes;
  }

  return { getCss, getCssEs6 }
}

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *    to make the value of templateStringES6 the same as the the value of templateString 
 */ 
export function exercise7() {
  const firstName = "John";
  const lastName = "Doe";

  const templateString = firstName + "\n\n\n\n" + lastName;
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}
