import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import T1LessonOne from "./components/T1LessonOne"
import T1LessonTwo from './components/T1LessonTwo'
import T2LessonOne from "./components/T2LessonOne"
import T2LessonTwo from './components/T2LessonTwo'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      lesson: ""
    }
    this.topicChoice = this.topicChoice.bind(this);
  }
  topicChoice = (e) => {
    this.setState({
      topic: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Learning Mandarin</h1>
        <h3>Welcome to Learning Mandarin by Scott</h3> 

        <RadioGroup onChange={this.topicChoice} horizontal>
          <RadioButton value="apple">
            Apple
          </RadioButton>
          <RadioButton value="orange">
            Orange
          </RadioButton>
          <RadioButton value="melon">
            Melon
          </RadioButton>
        </RadioGroup>


      </div>
    );
  }

}

export default App;

/*
  <ul>
      <li>
          <Link to="/TopicOne">Topic One</Link>
      </li>
      <li>
          <Link to="/TopicTwo">Topic Two</Link>
      </li>
  </ul>
  <Switch>
      <Route exact path="/TopicOne" component={TopicOne} />
      <Route path="/TopicTwo" component={TopicTwo} />
  </Switch>
*/