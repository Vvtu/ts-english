import { dictType } from "./Types";

const dictionary10: dictType[] = [
  {
    eng:
      "Eliminates some JavaScript silent errors by changing them to throw errors.",
    rus: "1 Strict mode change"
  },
  {
    eng:
      "Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode.",
    rus: "2 Strict mode change"
  },
  {
    eng:
      "Prohibits some syntax likely to be defined in future versions of ECMAScript.",
    rus: "3 Strict mode change"
  },

  {
    eng:
      "It’s not that only HTML elements get their node, but also the attributes of the HTML elements have their nodes (attribute nodes), every piece of text has its node (text nodes), and there are many other node types.",
    rus: "elements nodes, attribute nodes, text nodes ... "
  },
  {
    eng:
      "By accessing a DOM node of a given element we can manipulate its properties, such as position, appearance, content, behavior, etc.",
    rus: "By accessing a DOM node  ..."
  },
  {
    eng:
      "Having the access to a certain node in the DOM, there are ways to traverse through the DOM using its related nodes. We can move up or down the DOM tree, or we can move sideways staying at the same DOM level.",
    rus:
      "Having the access to a certain node in the DOM, there are ways ..."
  },
  {
    rus: "DOM traversing functions",
    eng: `
  node.parentNode
  node.childNodes - array
  node.childNodes.length
  parentNode.removeChild(children[i]);
  const elem = document.querySelector('#main')
  const list = document.querySelector("li[data-active='1']")
  const elem = document.getElementById("id001");
  const previous = current.previousSibling;`
  },
  {
    eng:
      "Every time we write a CSS declaration (or rule), it will enter the CSS Cascade, which will determine whether or not it will end up as the final style. The further down the cascade a declaration falls, the less likely it will end up as the final style.",
    rus: "Every time we write a CSS declaration ..."
  },
  // **********************************************

  {
    rus:
      "Second, if a microtask adds more microtasks to the queue ...",
    eng:
      "Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly-added microtasks execute before the next task is run. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added."
  },
  {
    rus: "performance.now()",
    eng:
      "performance.now() returns a timestamp, measured in milliseconds, accurate to one thousandth of a millisecond. This timestamp is equal to the number of milliseconds since the navigationStart attribute of the performance.timing interface. The Navigation Timing API is much more accurate and reliable"
  },
  {
    eng: `To compute the total amount of time it took to load the page, you can use the following code:
  const perfData = window.performance.timing;
  const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
  This subtracts the time at which navigation began (navigationStart) from the time at which the load event handler returns (loadEventEnd). This gives you the perceived page load time.`,
    rus: "To compute the total amount of time ..."
  }
];

const dictionary1: dictType[] = [
  // *******************************************************************

  {
    eng:
      "Encapsulation is an object-oriented programming concept that binds together the data and functions that manipulate the data, and that keeps both safe from outside interference and misuse. Data encapsulation led to the important OOP concept of data hiding.",
    rus: "Encapsulation is ..."
  },
  {
    eng:
      "If a class does not allow calling code to access internal object data and permits access through methods only, this is a strong form of abstraction or information hiding known as encapsulation.",
    rus:
      "A strong form of abstraction or information hiding known as encapsulation."
  },
  {
    eng:
      "Subtyping – a form of polymorphism – is when calling code can be agnostic as to which class in the supported hierarchy it is operating on – the parent class or one of its descendants. Meanwhile, the same operation name among objects in an inheritance hierarchy may behave differently.",
    rus: "Subtyping – a form of polymorphism - is ..."
  },
  {
    eng:
      "The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object. By default, values added using Object.defineProperty() are immutable.",
    rus: "The static method Object.defineProperty() ..."
  },
  {
    eng: "var _discount; // private member",
    rus: `var _discount; // private member
    Object.defineProperty(this,"discount",{
      get: function() { return _discount; },
      set: function(value) { _discount = value; if(_discount>80) _discount = 80; }
    });`
  },
  {
    eng: "Object.freeze(yourObject)...",
    rus:
      "Object.freeze(yourObject) - properties can not be changed (effectively sets 'writable': 'false' to all properties with data descriptor)."
  },
  {
    eng: `In JavaScript, 'this' is "free", its value is calculated at the time of calling the method and does not depend on where the method was declared, but depends on which object calls the method (which object is "before the point").`,
    rus:
      "В JavaScript 'this' является «свободным», его значение вычисляется в момент вызова метода и не зависит от того, где этот метод был объявлен, а зависит от того, какой объект вызывает метод (какой объект стоит 'перед точкой')."
  },
  {
    eng:
      "The 'get' syntax binds an object property to a function that will be called when that property is looked up.",
    rus: "The 'get' syntax binds ..."
  },
  {
    eng:
      "The 'set' syntax binds an object property to a function to be called when there is an attempt to set that property.",
    rus: "The 'set' syntax binds ..."
  },
  {
    eng:
      "An arrow function expression is a syntactically compact alternative to a regular function expression, although without its own bindings to the this, arguments, super, or new.target keywords. Arrow function expressions are ill suited as methods, and they cannot be used as constructors.",
    rus: "An arrow function expression ..."
  },
  {
    eng:
      "The 'instanceof' operator tests whether the prototype property of a constructor appears anywhere in the prototype chain of an object.",
    rus: "The 'instanceof' operator tests whether ..."
  },
  {
    eng:
      "A strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens.Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.",
    rus: "A strict definition of hoisting suggests ..."
  },
  {
    eng:
      "The immediate function pattern is a syntax that enables you to execute a function as soon as it is defined. It helps you wrap an amount of work you want to do without leaving any global variables behind.",
    rus: "The immediate function pattern is ..."
  },
  {
    eng: `Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.`,
    rus: "Classes are in fact ..."
  },
  {
    eng:
      "The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions",
    rus: "The main difference between a function expression and ..."
  },
  {
    eng:
      "An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not.",
    rus:
      "An important difference between function declarations and class declarations is ..."
  },
  {
    eng: `The constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class.`,
    rus: "The constructor method is ..."
  },
  {
    eng: `A constructor can use the 'super' keyword to call the constructor of the super class.`,
    rus: "A constructor can use the 'super' ..."
  },
  {
    eng:
      "The 'static' keyword defines a static method for a class. So called 'class method'.",
    rus: "The 'static' keyword defines ..."
  },
  {
    eng:
      "It's an error to reference private fields from outside of the class; they can only be read or written within the class body. // #height",
    rus: "It's an error to reference private fields ..."
  },
  {
    eng:
      "The 'extends' keyword is used in class declarations or class expressions to create a class as a child of another class. If there is a constructor present in the subclass, it needs to first call super() before using 'this'.",
    rus: "The 'extends' keyword is used ..."
  },
  {
    eng: `The iterable protocol allows JavaScript objects to define or customize their iteration behavior, such as what values are looped over in a for...of construct. In order to be iterable, an object must implement the @@iterator method // [Symbol.iterator]: function() { return this }`,
    rus: "The iterable protocol allows ..."
  },
  {
    eng: "Every symbol value returned from Symbol() is unique.",
    rus: "Every symbol value returned from Symbol() is unique."
  },
  {
    eng: `'Symbol' has static properties that expose several members of built-in objects, has static methods that expose the global symbol registry, and resembles a built-in object class, but is incomplete as a constructor because it does not support the syntax "new Symbol()".`,
    rus:
      "'Symbol' has static properties that expose several members of built-in objects ... "
  },
  {
    eng: `Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.`,
    rus: `Generators are functions which ...`
  },
  {
    eng: `A return statement in a generator, when executed, will make the generator finish`,
    rus: `A return statement in a generator, when executed, will make the generator finish`
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  },
  {
    eng: ``,
    rus: ``
  }
];

const oldDictionary1: dictType[] = [];
const veryOldDictionary1: dictType[] = [
  {
    eng:
      "The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. Separate your UI into components, where each component matches one piece of your data model.",
    rus: "The first thing - Break The UI Into A Component Hierarchy:"
  },

  {
    eng:
      "A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.",
    rus: "Single responsibility principle:"
  },
  {
    eng:
      "If you’re familiar with the concept of state, don’t use state at all to build the static version. State is reserved only for interactivity, that is, data that changes over time. Since this is a static version of the app, you don’t need it.",
    rus: "State and static version:"
  },
  {
    eng:
      "React doesn't have a mechanism to allow the HTML to change the component. The HTML can only raise events that the component responds to. The typical example is by using onChange.",
    rus:
      "React’s one-way data flow (also called one-way binding) keeps everything modular and fast:"
  },
  {
    eng:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.",
    rus: "Components let you split the ..."
  },
  {
    eng:
      "Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.",
    rus: "Conceptually, components ..."
  },
  {
    eng:
      "Don’t be afraid to split components into smaller components.",
    rus: "Don’t be afraid to split ..."
  },
  {
    eng:
      "But in most cases, it’s convenient to have a JavaScript function that handles the submission of the form and has access to the data that the user entered into the form. The standard way to achieve this is with a technique called 'controlled components'",
    rus:
      "A JavaScript function that handles the submission of the form ..."
  },
  {
    eng:
      "Concretely, a higher-order component is a function that takes a component and returns a new component. A HOC is a pure function with zero side-effects.",
    rus: "Concretely, a higher-order component is ..."
  },
  {
    eng:
      "Apply HOCs outside the component definition so that the resulting component is created only once. Then, its identity will be consistent across renders. This is usually what you want, anyway.",
    rus: "Apply HOCs outside the component definition so ..."
  },
  // *******************************************************************************
  {
    eng:
      "In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.",
    rus: "In the typical React dataflow, props are ..."
  },
  {
    eng:
      "useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.",
    rus: "useRef returns ..."
  },
  {
    eng:
      "The only difference between useRef() and creating a {current: ...} object yourself is that useRef will give you the same ref object on every render.",
    rus: "The only difference between useRef() and ..."
  },
  // *******************************************************************************

  {
    rus: "We recommend dispatching real DOM events ...",
    eng:
      "We recommend dispatching real DOM events on DOM elements, and then asserting on the result."
  },
  {
    rus: "Snapshot tests are a very useful tool ...",
    eng:
      "Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly."
  },
  {
    rus: "The React Testing Library provides ...",
    eng:
      "The React Testing Library provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices."
  },
  {
    rus: "Its primary guiding principle is: ",
    eng:
      "Its primary guiding principle is: The more your tests resemble the way your software is used, the more confidence they can give you."
  },
  {
    eng:
      "ReactCSSTransitionGroup is a high-level API based on ReactTransitionGroup and is an easy way to perform CSS transitions and animations when a React component enters or leaves the DOM.",
    rus: "ReactCSSTransitionGroup is ..."
  },
  {
    eng:
      "React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app, React Router works wherever React is rendering--so take your pick!",
    rus: "React Router is ..."
  },
  {
    eng:
      "The scrollRestoration property of History interface allows web applications to explicitly set default scroll restoration behavior on history navigation.",
    rus: "The scrollRestoration property ..."
  }
];
const oldDictionary2: dictType[] = [];

const dictionary20: dictType[] = [];

const dictionary2: dictType[] = [];

export default {
  dictionary1,
  oldDictionary1,
  dictionary10,
  dictionary2,
  dictionary20,
  oldDictionary2,
  //
  veryOldDictionary1
};
