//this button will have the context available so we can change the theme from light to dark

//we need an event to handle the button click
"use client";
//i need to import my custom hook which has my context available
import { useTheme } from "@/context/ThemeContext";

export default function ThemeButton() {
  //my use theme has access to the theme and setTheme values
  //we can destructure the values here
  const { theme, setTheme } = useTheme();
  function handleClick() {
    //this handle click needs to change the theme from light to dark
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <>
      <h1 className={theme}>Theme Test</h1>
      <button
        onClick={handleClick}
        className="border-orange-700 border-2 hover:bg-amber-900 active:bg-amber-950 cursor-pointer"
      >
        Change the Theme
      </button>
    </>
  );
}
