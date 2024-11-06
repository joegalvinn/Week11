//going to set up a light and dark theme

//here im going to set up my context
//to set up context, we are going to use two hooks: useState and useContext
//context can provide any component (and pages) with props (state, data...)
//this is a client component because we are usign hooks
"use client";

//import set up elemtns for our context
import { createContext, useContext } from "react";
import { useState } from "react";

//set up the context with createContext
//in the brackets we need the initial value of our context
const ThemeContext = createContext("light");

//next i need to give my ThemeContext to the Provider, so all components have access to the ThemeContext
//a provider is wrapping the app in something to make it have access to a specific feature, (for example in clerk we wrap our children in ClerkProvider, so our whole app has access to the clerk authentication)

export function ThemeProvider({ children }) {
  //we are going to declare the theme state light/dark
  //state = theme
  const [theme, setTheme] = useState("light");

  return (
    //we are going to return the context we want to provide, we are returning it so it is available outside of this function
    //in the value prop we will write the elements that we want to provide to the rest of the app --> if the value prop is more than one element, we need to store them in an object
    //the value here is theme and setTheme, so we can mutate state
    //children represents all the components in our app
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//we are going to use useContext to allow any values declared in the provider to be used in any other place
//i am going to have a custom hook taht combines context and provider
export function useTheme() {
  return useContext(ThemeContext);
}
