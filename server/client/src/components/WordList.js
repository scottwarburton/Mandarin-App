import React from 'react'

const WordList = ({ flashcards }) => {
    return (
        <table>
            <tr>
                <th>English</th>
                <th>Mandarin</th>
                <th>Pinyin</th>
                <th>Save</th>
            </tr>
            {flashcards.map(item => {
                return (
                    <tr>
                        <td>{item.english}</td>
                        <td>{item.mandarin}</td>
                        <td>{item.pinyin}</td>
                        <td><button/></td>
                    </tr>
                )
            })}
        </table>
    )
}

export default WordList
