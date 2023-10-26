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
      <Router>
        <Routes>
          <Route path="/own-website" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/ueber-mich" element={<AboutMe />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
