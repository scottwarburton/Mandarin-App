import React from 'react'

const Sentences = ({ flashcards }) => {
    return (
        <div>
            {flashcards.map(item => {
                return <p>{item.sentence}</p>
            })}
        </div>
    )
}

export default Sentences
