import React from 'react'

function Answer(props) {
    return (
        <div>
            <button onClick={() => props.handleClick(props.selection)}>{props.answer}</button>
        </div>
    )
}

export default Answer
