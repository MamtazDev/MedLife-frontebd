import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Services />
    </>
  );
}

export default App;
