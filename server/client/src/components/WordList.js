import React, { useState } from 'react'
import axios from "axios"

const WordList = ({ flashcards }) => {
    const [englishWord, setEnglishWord] = useState("");
    const [mandarinWord, setMandarinWord] = useState("");
    const [pinyinWord, setPinyinWord] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        let savedWord = {
            englishWord: englishWord,
            mandarinWord: mandarinWord,
            pinyinWord: pinyinWord
        }
        await axios.post("", savedWord)
        .then(function (response) {
            console.log(response);
        })
        setEnglishWord("");
        setMandarinWord("");
        setPinyinWord("");
    }
    return (
        <table className="blueTable">
            <thead>
                <tr>
                    <th>English</th>
                    <th>Mandarin</th>
                    <th>Pinyin</th>
                    <th>Save</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="4">
                        <div className="links">
                            <a href="#">&laquo;</a>
                            <a className="active" href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#">&raquo;</a>
                        </div>
                    </td>
                </tr>
            </tfoot>
            <tbody>
                {flashcards.map(item => {
                    return (
                        <tr>
                            <td>{item.english}</td>
                            <td>{item.mandarin}</td>
                            <td>{item.pinyin}</td>
                            <td>
                                <form onSubmit={(e) => handleSubmit(e)}>
                                    <button className="saveWord" type="submit" onClick={() => {
                                        setEnglishWord(`${item.english}`)
                                        setMandarinWord(`${item.mandarin}`)
                                        setPinyinWord(`${item.pinyin}`)
                                    }}>Save</button>
                                </form>
                                
                            </td>
                        </tr>
                    )
                })} 
            </tbody>
        </table>
    )
}

export default WordList
