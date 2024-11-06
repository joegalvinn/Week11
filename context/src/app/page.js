"use client";

import UserPage from "@/components/UserPage";
import ThemeButton from "@/components/ThemeButton";
import { useTheme } from "@/context/ThemeContext";
import { useReducer } from "react";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function HomePage() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const { theme } = useTheme();
  return (
    <div className={theme}>
      <h1>HomePage</h1>
      <ThemeButton />
      <UserPage />

      <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button
          className="border-green-500 border-2 hover:bg-green-900 hover:text-white  active:bg-green-300 cursor-pointer"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
        <button
          className="border-red-600 border-2 hover:bg-red-400 active:bg-red-950 hover:text-white cursor-pointer"
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
