import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";

import "./App.css";
import Home from "./tabs/Home";
import Projects from "./tabs/Projects";
import AboutMe from "./tabs/AboutMe";
import Contact from "./tabs/Contact";

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
