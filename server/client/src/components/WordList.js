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
                        <td>
                            <form action="/insert_word/" method="POST">
                                <input name="content" value={item.mandarin} type="hidden" />
                                <button type="submit" />
                            </form>
                        </td>
                    </tr>
                )
            })}
        </table>
    )
}

export default WordList
