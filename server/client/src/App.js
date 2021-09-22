import './App.css';
import Welcome from "./components/Welcome"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import React from "react"


function App() {
  return (
    <Router>
      <Welcome />
    </Router>
  );
}

export default App;
