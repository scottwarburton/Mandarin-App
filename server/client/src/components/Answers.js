import React from 'react'
import Answer from "./Answer"

function Answers(props) {
    var answerList = []
    for (let i = 0; i < props.questions.answers.length; i++) {
      answerList.push(<Answer selection={i} handleClick={props.handleClick} answer={props.questions.answers[i]} />)
    }
    return (
        <div className="quizAnswers">
            {answerList}
        </div>
    )
}

export default Answers
