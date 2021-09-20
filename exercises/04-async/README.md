# Async - A Poll Console App

## Getting started

1. Clone repository
2. In exercises/04-async:
3. Run `npm install`
4. Run `npm start`

## Features

Edit src/index.js and implement the following features.

### 1. Start

Write a `start()` function. This function should fetch the active poll and display the options (image, title and id) to the user in the browser console.

💡 Use the `logImage` image helper function to print an image to the console (in Chrome)

### 2. Vote

Write a `vote(optionId)` function. This function should have 1 parameter "id" where you can pass the option Id to vote for.

The optionId should be sent as JSON data to the backend: 

```json
{ "optionId" : 11 } 
```

💡 To vote, you need to do a `POST` request to the backend. Read the MDN docs on example post method implementation if you get stuck.

### 3. Result

Write a `result()` function. This function should display the poll result in the console.

Display the poll result below the poll image and title.



### 4. Improve

- Think about the UX, even though it's just a console application ;) . E.g. You can clear the console between steps with `console.clear`

- Did you use ES6 code? Refactor to ES6 where possible

- Think about clean code, e.g.:
    - Do you see duplicate things in your code? -> How can you make things reusable?
    - Are all your functions globally available? -> How can you encapsulate your code?
    - When the product owner wants a fancy UI instead of a console interface, how much of your code do you need to rewrite? -> Can you refactor your code to make it easier to switch interfaces? 



## Resources:

- 📄  [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)    