import './App.css';
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import T1L1 from "./components/T1L1"
import T1L2 from './components/T1L2'
import T2L1 from "./components/T2L1"
import T2L2 from './components/T2L1'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      lesson: ""
    }
  }
  radio1 = (e) => {
    this.setState({
      topic: e.target.value
    })
  }
  radio2 = (e) => {
    this.setState({
      topic: e.target.value
    })
  }
  radio3 = (e) => {
    this.setState({
      lesson: e.target.value
    })
  }
  radio4 = (e) => {
    this.setState({
      lesson: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>Learning Mandarin</h1>
        <h3>Welcome to Learning Mandarin by Scott</h3> 

        { this.state.topic === "" &&
          <form>
            <label for="radio1">T1</label>
            <input type="radio" id="radio1" name="topics" value="T1" onChange={this.radio1} style={{color: "blue"}} />
            <label for="radio2">T2</label>
            <input type="radio" id="radio2" name="topics" value="T2" onChange={this.radio2} style={{color: "blue"}} />
          </form>
        }

        { this.state.lesson === "" && this.state.topic !== "" &&
          <form>
            <label for="radio3">L1</label>
            <input type="radio" id="radio3" name="lessons" value="L1" onChange={this.radio3} style={{color: "blue"}} />
            <label for="radio4">L2</label>
            <input type="radio" id="radio4" name="lessons" value="L2" onChange={this.radio4} style={{color: "blue"}} />
          </form>
        }

        { this.state.topic && this.state.lesson &&
          <div>
            <h3>Welcome to {this.state.topic} {this.state.lesson}</h3>
            <Link to="`/${this.state.topic}${this.state.lesson}`">Begin topic</Link>
          </div>
        }
        <Switch>
            <Route exact path="/T1L1" component={T1L1} />
            <Route path="/T1L2" component={T1L2} />
        </Switch>
        
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