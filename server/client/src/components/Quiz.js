import React, { useState } from 'react'
import Question from "./Question.js"

const Quiz = ({ questions }) => {
    const [points, setPoints] = useState(0);
    return (
        <div>
            <h2>Quiz time</h2>
            <div>
                {questions.map(question => {
                    <Question questions={question}/>
                    {point} //
                    {setPoints + 1} //
                })}
            </div>
            <div>{points}/{questions.length}</div>
        </div>
    )
}

export default Quiz
