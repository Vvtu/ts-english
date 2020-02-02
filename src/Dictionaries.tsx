import { dictType } from "./Types";

const dictionary10: dictType[] = [];

const dictionary1: dictType[] = [
  {
    eng:
      "The first thing you’ll want to do is to draw boxes around every component (and subcomponent) in the mock and give them all names. Separate your UI into components, where each component matches one piece of your data model.",
    rus: "Break The UI Into A Component Hierarchy:"
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

const oldDictionary1: dictType[] = [];
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
