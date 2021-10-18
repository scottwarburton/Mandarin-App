import React from 'react'

function Answer(props) {
    return (
        <div>
            <button className="selection topicEveryday answerButton" onClick={() => props.handleClick(props.selection)}>{props.answer}</button>
        </div>
    )
}

export default Answer
