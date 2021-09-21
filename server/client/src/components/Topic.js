import React from 'react'
import LessonOne from "./LessonOne"
import { Link } from 'react-router-dom'

class Topic extends React.Components {
    render() {
        return (
            <div>
                <h3>Choose topic</h3>
                <ul>
                    <li>TopicOne</li>
                    <li>TopicTwo</li>
                    <li>TopicThree</li>
                </ul>
            </div>
        );
    }
}

export default Topic
