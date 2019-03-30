---
path: '/interviewquestions'
date: '2019-03-30'
title: 'Interview Questions'
author: 'Syyad Khan'
---

## 1. What’s the difference between SOAP and REST?

One of the key differences is that SOAP uses XML while REST also supports text, JSON and other formats.

-

## 2. Which CMSs have you worked with?

Some common open-source content management systems (CMSs) are WordPress, Joomla and Drupal. I ahve used Conetentful.

-

## 3. What is the difference between the equality operators == and ===?

Triple equals (===) checks for strict equality, which means both the type and value must be the same. Double equals (==) on the other hand first performs type coercion so that both operands are of the same type and then applies strict comparison.

#### Good to hear

Whenever possible, use triple equals to test equality because loose equality == can have unintuitive results.

Type coercion means the values are converted into the same type.

Mention of falsy values and their comparison.

## 4. What is the difference between an element and a component in React?

An element is a plain JavaScript object that represents a DOM node or component.
A component is a function or class. Components can have state and take props as input and return an element tree as output (although they can represent generic containers or wrappers and don't necessarily have to emit DOM). Components can initiate side effects in lifecycle methods (e.g. AJAX requests, DOM mutations, interfacing with 3rd party libraries)

#### Good to hear

Elements are immutable, plain objects that describe the DOM nodes or components you want to render.

Components can be either classes or functions, that take props as an input and return an element tree as the output.

## 5. What does lifting state up in React mean?

When several components need to share the same data, then it is recommended to lift the shared state up to their closest common ancestor. For example, if two child components share the same data, it is recommended to move the shared state to parent instead of maintaining the local state in both child components.

## 6. In which states can a Promise be?

a. pending: initial state, neither fulfilled nor rejected.

b. fulfilled: meaning that the operation completed successfully.

c. rejected: meaning that the operation failed.

## 7. How do you write comments inside a JSX tree in React?

Comments must be wrapped inside curly braces {} and use the /\* \*/ syntax.

```javascript
const tree = (
  <div>
    {/* Comment */}
    <p>Text</p>
  </div>
)
```

## 8. What is the purpose of callback function as an argument of setState?

The callback function is invoked when setState has finished and the component gets rendered. Since setState is asynchronous, the callback function is used for any post action.

```javascript
setState({ name: 'syyad' }, () => {
  console.log('The name has updated and component re-rendered')
})
```

## 9. How do you clone an object in JavaScript?

Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

With this technique, prototypes are ignored. In addition, nested objects are not cloned, but rather their references get copied, so nested objects still refer to the same objects as the original. Deep-cloning is much more complex in order to effectively clone any type of object (Date, RegExp, Function, Set, etc) that may be nested within the object.

## 10. What is CORS?

Cross-Origin Resource Sharing or CORS is a mechanism that uses additional HTTP headers to grant a browser permission to access resources from a server at an origin different from the website origin.

#### Good to hear

CORS behavior is not an error,  it’s a security mechanism to protect users.

CORS is designed to prevent a malicious website that a user may unintentionally visit from making a request to a legitimate website to read their personal data or perform actions against their will.

## 11. Describe the layout of the CSS Box Model and briefly describe each component.

Content: The inner-most part of the box filled with content, such as text, an image, or video player. It has the dimensions content-box width and content-box height.

Padding: The transparent area surrounding the content. It has dimensions padding-box width and padding-box height.

Border: The area surrounding the padding (if any) and content. It has dimensions border-box width and border-box height.

Margin: The transparent outer-most layer that surrounds the border. It separates the element from other elements in the DOM. It has dimensions margin-box width and margin-box height.

-

![Box Model](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif 'Box Model')

## 12. What is the DOM?

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

#### Good to hear

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.

The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the <head> with a defer attribute, or inside a DOMContentLoaded event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.

document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.

Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.
