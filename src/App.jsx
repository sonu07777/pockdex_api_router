import { useState } from "react";
import { Link } from "react-router-dom";

import "./App.css";
import CoustomRouter from "./Router/router.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-wrapper">

      <Link to="/">
      <span id="head-of-the-page">Pockdex</span>
      </Link>
      <CoustomRouter />
    </div >
  );
}

export default App;
