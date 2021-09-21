import './App.css';
import Welcome from "./components/Welcome"
import Topic from "./components/Topic"
import LessonOne from "./components/LessonOne"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import React from "react"


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/selection">Topic</Link>
          </li>
          <li>
            <Link to="/lessonone">Lesson</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/topic">
            <Topic />
          </Route>
          <Route path="/lessonone">
            <LessonOne />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
