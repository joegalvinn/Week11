import { useContext } from "react";
import { UserContext } from "@/context/userContext";

export default function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        change username to spongebob
      </button>
    </>
  );
}
