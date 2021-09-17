
// ### 1. A function stored in a variable
{
  const hello = function () {
    console.log("hello world");
  };
}


// ### 2. A function as an argument of another function
{
  function say(fn) {
    fn();
  }

  function hello() {
    console.log("hello world");
  }
}


// ### 3. A function returning a function
{
  function say() {
    return function hello() {
      console.log("hello world");
    };
  }
}


// ### 4. A function stored in a data structure
{
  const warrior = {
    hp: 100,
    strength: 20,
    attack: function (target) {
      target.hp -= this.strength;
    },
  };
  
  // Array
  const myArray = [
    function () {
      console.log("Hello World");
    },
  ];
}


// ### 5. A function holding its own properties and methods
{
  function render() {
    console.log("Hello " + render.data.name);
  }
  
  render.data = {
    name: "World",
  };
}