import React from 'react'
import Question from "./Question.js"
import Answers from "./Answers.js"

function QuizBox(props) {
    return (
        <div>
            <Question questions={props.questions}/>
            <Answers questions={props.questions} handleClick={props.handleClick}/>
        </div>
    )
}

export default QuizBox
