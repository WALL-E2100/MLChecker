import { useState } from "react";
import Signin from "./Components/Signin";
import "./App.css";
import Checker from "./Components/Checker/Checker";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <SignedOut>
          <Signin />
        </SignedOut>
        <SignedIn>
          <Checker />
        </SignedIn>
      </div>
    </>
  );
}

export default App;
