import React from 'react'
import Flashcard from "./Flashcard"

const FlashCardList = ({ flashcards }) => {
    return (
        <div className="wordListBox">
            {flashcards.map(item => {
                return <Flashcard flashcard={item} key={item.id} />
            })}
        </div>
    )
}

export default FlashCardList
