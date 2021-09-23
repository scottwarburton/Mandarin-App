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
    this.changeTopic = this.changeTopic.bind(this);
    this.changeLesson = this.changeLesson.bind(this);
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
  changeTopic() {
    this.setState({
      topic: "",
      lesson: ""
    })
  }
  changeLesson() {
    this.setState({
      lesson: ""
    })
  }
  render() {
    return (
      <div id="app">
        <h1>Learning Mandarin</h1>

        {this.state.topic === "" && this.state.lesson === "" && <h3>Welcome to Learning Mandarin by Scott</h3>} 

        { this.state.topic === "" &&
          <form className="selectionForm">
            <input type="button" className="selection" name="topics" value="T1" onClick={this.radio1} />
            <input type="button" className="selection" name="topics" value="T2" onClick={this.radio2} />
          </form>
        }

        { this.state.lesson === "" && this.state.topic !== "" &&
          <form className="selectionForm">
            <input type="button" className="selection" name="lessons" value="L1" onClick={this.radio3} />
            <input type="button" className="selection" name="lessons" value="L2" onClick={this.radio4} />
          </form>
        }

        { this.state.topic !== "" && this.state.lesson !== "" &&
          <div>
            <input type="button" value="change topic" onClick={this.changeTopic} />
            <input type="button" value="change lesson" onClick={this.changeLesson} />
          </div>
        }

        <div id="box">
          {this.state.topic === "T1" && this.state.lesson === "L1" ? <T1L1 /> : null}
          {this.state.topic === "T1" && this.state.lesson === "L2" ? <T1L2 /> : null}
          {this.state.topic === "T2" && this.state.lesson === "L1" ? <T2L1 /> : null}
          {this.state.topic === "T2" && this.state.lesson === "L2" ? <T2L2 /> : null}
        </div>
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