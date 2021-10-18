import React from 'react'

function Question(props) {
    return (
        <div>
            <h3 className="quizHeading">Q{props.questions.id}:   {props.questions.question}</h3>
        </div>
    )
}

export default Question
