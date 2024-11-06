//objective: to implement reducer in our app -> to start i didn't need reducer because I only have one state to manage, if we have multipule states to manage, it makes sense to use a reducer
//user story: to create more available themes for accessibility
//we are going to create a reducer function that contains conditions that represents all instances of our state
"use client";

import { createContext, useContext } from "react";
import { useState } from "react";

//import the useReducer hook
import { useReducer } from "react";

//we are going to refactor all our state into a reducer function
//the reducer function takes two parameters: state and action (named by convention)
//we will use the parameters to set up the different instances of state
function themeReducer(state, action) {
  //to set up the conditions, you can use traditional if statements or switch and case
  switch (action.type) {
    case "light":
      return { ...state, theme: (state.theme = "light") };
    //the return above will create the below
    //   {
    //     prop:1,
    //     prop;2,
    //     theme: "value"
    //   }
    case "dark":
      return { ...state, theme: (state.theme = "dark") };
    case "colourblind":
      return { ...state, theme: (state.theme = "colourblind") };
    case "dyslexia":
      return { ...state, theme: (state.theme = "dyslexia") };
    //take what ever value state was before and change it to the new one
  }
}

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //once we have our reducer funtion, we can now write our useReducer to manage the reducer function
  //the useReducer hook needs two argments: the reducer function and the initial state object.
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  //we need to give state and dispach as the value of context
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
