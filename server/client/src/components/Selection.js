import React from 'react'
import LessonOne from "./LessonOne"
import { HashLink } from 'react-router-hash-link'

class Selection extends React.Components {
    constructor() {
        super();
        this.state = {
            topic: 1
        }
    }
    render() {
        return (
            <div>
                <h3>Choose topic</h3>
                <ul>
                    <li><HashLink to="./#LessonOne">TopicOne</HashLink></li>
                    <li>TopicTwo</li>
                    <li>TopicThree</li>
                </ul>
                {/* click buttons - set state */}
                <p>Choose lesson</p>
                {/* click buttons - set state */}
                <LessonOne />
            </div>
        );
    }
}

export default Selection
