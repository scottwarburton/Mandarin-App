import './App.css';
import Selection from "./components/Selection"
import { BrowserRouter as Router} from "react-router-dom"
import React from "react"


function App() {
  return (
    <Router>
      <div className="container">
        <h1>Learning Mandarin</h1>
        <h3>Welcome to Learning Mandarin by Scott</h3>
        <br/><br/>
        <Selection />
      </div>
    </Router>
  );
}

export default App;
