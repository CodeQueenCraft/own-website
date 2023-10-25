import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router";

import "./App.css";

import Contact from "./tabs/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
