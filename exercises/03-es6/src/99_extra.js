// 01.3: Extra Var Let Const

/*
 * Change "var" to "let", and see how it impacts the value of "i" inside the callbacks.
 */
export function varLetConstExtra1() {
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
export function varLetConstExtra2() {
  const fruit = ["kiwi", "banana"]; // ← Don't change this line

  return fruit[1];
}

// 02.3: Extra Template Literals

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *    to make the value of templateStringES6 the same as the the value of templateString
 * What do you think? Is it more readable?
 */
export function templateLiteralsExtra1() {
  const a = 2;
  const b = 3;

  const templateString = a + " x " + b + " = " + a * b + ", not " + (a * b - 2);
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}

/*
 * Implement getCssEs6. It should have the same output as getCss, but in 1 template literal
 */
export function templateLiteralsExtra2() {
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

  return { getCss, getCssEs6 };
}

/*
 * Use template literals (With variable substitution instead of "+" concatenation)
 *    to make the value of templateStringES6 the same as the the value of templateString
 */
export function templateLiteralsExtra3() {
  const firstName = "John";
  const lastName = "Doe";

  const templateString = firstName + "\n\n\n\n" + lastName;
  const templateStringES6 = ``;

  return { templateString, templateStringES6 };
}
