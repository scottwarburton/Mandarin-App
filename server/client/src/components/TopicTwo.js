import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import T2LessonOne from "./T2LessonOne"
import T2LessonTwo from './T2LessonTwo'

const TopicTwo = () => {
    return (
        <div>
            <h3>Choose lesson</h3>
            <ul>
                <li>
                    <Link to="/T2LessonOne">(T2) Lesson 1</Link>
                </li>
                <li>
                    <Link to="/T2LessonTwo">(T2) Lesson 2</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/T2LessonOne" component={T2LessonOne} />
                <Route path="/T2LessonTwo" component={T2LessonTwo} />
            </Switch>
        </div>
    )
}

export default TopicTwo
