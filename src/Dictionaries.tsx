import { dictType } from "./Types";

const dictionary10: dictType[] = [];

const dictionary1: dictType[] = [
  // *******************************************************************
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
      "The 'export' statement is used when creating JavaScript modules to export functions, objects, or primitive values from the module so they can be used by other programs with the import statement. Exported modules are in strict mode whether you declare them as such or not. The export statement cannot be used in embedded scripts.",
    rus: "The 'export' statement is used ..."
  },
  {
    eng:
      "There are two types of exports: Named Exports (Zero or more exports per module) Default Exports (One per module)",
    rus: "There are two types of exports: ..."
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
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  },
  {
    eng: "",
    rus: ""
  }
];

const oldDictionary1: dictType[] = [
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

// const veryOldDictionary1: dictType[] = [];

const dictionary20: dictType[] = [];

const dictionary2: dictType[] = [];

export default {
  dictionary1,
  oldDictionary1,
  dictionary10,
  dictionary2,
  dictionary20,
  oldDictionary2
};
