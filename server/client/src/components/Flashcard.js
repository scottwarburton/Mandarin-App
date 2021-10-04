import React, { useState } from 'react'

const Flashcard = ({ flashcard }) => {
    const [flip, setFlip] = useState(false)
    return (
        <div 
            onClick={() => setFlip(!flip)}
            className={`flashcards ${flip ? "flashcardsFlip" : ""}`}
        >
            {flip ? flashcard.english : flashcard.mandarin}
        </div>
    )
}

export default Flashcard
