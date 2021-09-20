import React from 'react'
import LessonOne from "./LessonOne"

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
                <p>Choose topic</p>
                {/* click buttons - set state */}
                <p>Choose lesson</p>
                {/* click buttons - set state */}
                <LessonOne />
            </div>
        );
    }
}

export default Selection
