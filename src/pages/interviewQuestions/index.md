---
path: '/interviewquestions'
date: '2019-03-30'
title: 'Interview Questions'
author: 'Syyad Khan'
---

## 1. What is the difference between the equality operators == and ===?

Triple equals (===) checks for strict equality, which means both the type and value must be the same. Double equals (==) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

#### Good to hear

Whenever possible, use triple equals to test equality because loose equality == can have unintuitive results.

Type coercion means the values are converted into the same type.

---

## 2. What is the difference between an element and a component in React?

An element is a plain JavaScript object that represents a DOM node or component.
A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries)

#### Good to hear

Elements are immutable, plain objects that describe the DOM nodes or components you want to render.

Components can be either classes or functions, that take props as an input and return an element tree as the output.

---

## 3. What does lifting state up in React mean?

When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.

---

## 4. In which states can a Promise be?

a. pending: initial state, neither fulfilled nor rejected.

b. fulfilled: meaning that the operation completed successfully.

c. rejected: meaning that the operation failed.

---

## 5. How do you write comments inside a JSX tree in React?

Comments must be wrapped inside curly braces {} and use the /\* \*/ syntax.

```javascript
const tree = (
  <div>
    {/* Comment */}
    <p>Text</p>
  </div>
)
```

---

## 6. What is the purpose of callback function as an argument of setState?

The callback function is invoked when setState has finished and the component gets rendered. Since setState is asynchronous, the callback function is used for any post action.

```javascript
setState({ name: 'syyad' }, () => {
  console.log('The name has updated and component re-rendered')
})
```

---

## 7. How do you clone an object in JavaScript?

Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

---

## 8. What is CORS?

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.

#### Good to hear

CORS behavior is not an error,  it’s a security mechanism to protect users.

CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

---

## 9. Describe the layout of the CSS Box Model and briefly describe each component.

Content: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions content-box width and content-box height.

Padding: The transparent area surrounding the content. It has dimensions padding-box width and padding-box height.

Border: The area surrounding the padding (if any) and content. It has dimensions border-box width and border-box height.

Margin: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions margin-box width and margin-box height.

-

![Box Model](https://www.1keydata.com/css-tutorial/box-model.jpg 'Box Model')

---

## 10. What is the DOM?

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

![The DOM](https://res.cloudinary.com/khandoors/image/upload/c_scale,h_250,w_250/v1560127338/Blog%20Images/Example-of-DOM-Node-Tree.png 'The DOM')

#### Good to hear

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the <head> with a defer attribute, or inside a DOMContentLoaded event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.

document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.

Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

![The DOM](https://www.researchgate.net/profile/Andras_Nemeslaki2/publication/254460232/figure/fig5/AS:667808983703557@1536229477309/HTML-DOM-tree.png 'The DOM')

---

## 11. What is the difference between em and rem units?

Both **em** and **rem** units are based on the font-size CSS property. The only difference is where they inherit their values from.

**em** units inherit their value from the font-size of the parent element

**rem** units inherit their value from the font-size of the root element (html)
In most browsers, the font-size of the root element is set to 16px by default.

#### Good to hear

Important for mobile responsive sites.

---

## 12. What is event delegation and why is it useful? Can you show an example of how to use it?

Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events "bubble" up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.

DOM events provide useful information about the element that initiated the event via Event.target. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.

This provides two main benefits:

- It increases performance and reduces memory consumption by only needing to register a single event listener to handle potentially thousands of elements.
- If elements are dynamically added to the parent, there is no need to register new event listeners for them.

---

## 13. What is the difference between an expression and a statement in JavaScript?

There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as:

-Expression: produces a value
-Statement: performs an action
-Expression statement: produces a value and performs an action

**A general rule of thumb:**
_If you can print it or assign it to a variable, it’s an expression. If you can’t, it’s a statement._

---

## 14. What are truthy and falsy values in JavaScript?

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to true or false when performing certain operations.

There are 6 falsy values in JavaScript. They are:

- false
- undefined
- null
- "" (empty string)
- NaN
- 0 (both +0 and -0)

Every other value is considered truthy.

---

## 15. What is the difference between the array methods map() and forEach()?

Both methods iterate through the elements of an array. map() maps each element to a new element by invoking the callback function on each element and returning a new array. On the other hand, forEach() invokes the callback function for each element but does not return a new array. forEach() is generally used when causing a side effect on each iteration, whereas map() is a common functional programming technique.

#### Good to hear

- Use forEach() if you need to iterate over an array and cause mutations to the elements without needing to return values to generate a new array.

- map() is the right choice to keep data immutable where each value of the original array is mapped to a new array.

---

## 16. How does hoisting work in JavaScript?

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

---

## 17. What is a key? What are the benefits of using it in lists?

Keys are a special string attribute that helps React identify which items have been changed, added or removed. They are used when rendering array elements to give them a stable identity. Each element's key must be unique (e.g. IDs from the data or indexes as a last resort).

```javascript
const todoItems = todos.map(todo => <li key={todo.id}>{todo.text}</li>)
```

- Using indexes as keys is not recommended if the order of items may change, as it might negatively impact performance and may cause issues with component state.
- If you extract list items as a separate component then apply keys on the list component instead of the <li> tag.

#### Good to hear

- Keys give elements in a collection a stable identity and help React identify changes.

- You should avoid using indexes as keys if the order of items may change.

- You should lift the key up to the component, instead of the \<li> element, if you extract list items as components.

---

## 18. What is the difference between a parameter and an argument?

Parameters are the variable names of the function definition, while arguments are the values given to a function when it is invoked.

```javascript
function myFunction(parameter1, parameter2) {
  console.log(arguments[0]) // "argument1"
}
myFunction('argument1', 'argument2')
```

#### Good to hear

arguments is an array-like object containing information about the arguments supplied to an invoked function.

myFunction.length describes the arity of a function (how many parameters it has, regardless of how many arguments it is supplied).

---

## 19. What is the difference between Synchronous and Asynchronous code in JavaScript?

Synchronous means each operation must wait for the previous one to complete.

Asynchronous means an operation can occur while another operation is still being processed.

In JavaScript, all code is synchronous due to the single-threaded nature of it. However, asynchronous operations not part of the program (such as XMLHttpRequest or setTimeout) are processed outside of the main thread because they are controlled by native code (browser APIs), but callbacks part of the program will still be executed synchronously.

#### Good to hear

JavaScript has a concurrency model based on an "event loop".

Functions like **alert** block the main thread so that no user input is registered until the user closes it.

![synchronous and asynchronous](https://msl-network.readthedocs.io/en/latest/_images/sync_vs_async.png 'synchronous and asynchronous')

---

## 20. What are JavaScript data types?

The latest ECMAScript standard defines seven data types, six of them being primitive: _Boolean_, _Null_, _Undefined_, _Number_, _String_, _Symbol_ and one non-primitive data type: _Object_.

#### Good to hear

- Mention of newly added _Symbol_ data type

- _Array_, _Date_ and _function_ are all of type _object_

- Functions in JavaScript are objects with the capability of being callable

---

## 21. What are higher-order components?

A higher-order component (HOC) is a function that takes a component as an argument and returns a new component. It is a pattern that is derived from React’s compositional nature. Higher-order components are like pure components because they accept any dynamically provided child component, but they won’t modify or copy any behavior from their input components.

- They can be used for state abstraction and manipulation, props manipulation, render high jacking, etc.

---

## 22. What is the event loop in Node.js?

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

- The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

![Event Loop](https://i.stack.imgur.com/Lbs9z.png 'Event Loop')

---

## 23. What is a virtual DOM and why is it used in libraries/frameworks?

The virtual DOM (VDOM) is a representation of the real DOM in the form of plain JavaScript objects. These objects have properties to describe the real DOM nodes they represent: the node name, its attributes, and child nodes.

The library/framework uses the virtual DOM as a means to improve performance. When the state of an application changes, the real DOM needs to be updated to reflect it. However, changing real DOM nodes is costly compared to recalculating the virtual DOM. The previous virtual DOM can be compared to the new virtual DOM very quickly in comparison.

Once the changes between the old VDOM and new VDOM have been calculated by the diffing engine of the framework, the real DOM can be patched efficiently in the least time possible to match the new state of the application.

![Virtual DOM](https://cdn-images-1.medium.com/max/1200/0*D0NUsJda91_JH644.png 'Virtual DOM')

---
