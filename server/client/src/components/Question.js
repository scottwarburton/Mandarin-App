import React from 'react'

const Question = ({ question }) => {
    function checkAnswer() {
        if (e === question.answer) {
            point = 1 //
        } else {
            point = 0 //
        }
    }
    return (
        <div>
            <h3>{question.question}</h3>
            <ul>
                <li>{question.answer1} onClick={checkAnswer}</li>
                <li>{question.answer2} onClick={checkAnswer}</li>
                <li>{question.answer3} onClick={checkAnswer}</li>
                <li>{question.answer4} onClick={checkAnswer}</li>
            </ul>    
        </div>
    )
}

export default Question
