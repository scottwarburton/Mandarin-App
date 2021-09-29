import React, { useState } from 'react'
import axios from "axios"

const WordList = ({ flashcards }) => {
    const [saveWord, setSaveWord] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("add_words/", saveWord);
        setSaveWord("");
    }
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
                        <td>
                            <button type="submit" onClick={() => setSaveWord(`${item.mandarin}`)} onSubmit={(e) => handleSubmit(e)} />
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default WordList
