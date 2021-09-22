import React from 'react'
import Topic from "./Topic"
import LessonOne from "./LessonOne"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Welcome = () => {
    return (
        <div>
            <h1>Learning Mandarin</h1>
            <h3>Welcome to Learning Mandarin by Scott</h3> 
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
            <Switch>
                <Route exact path="/" component={Welcome} />
                <Route path="/topic" component={Topic} />
                <Route path="/lessonone" component={LessonOne} />
            </Switch>
        </div>
    )
}

export default Welcome
