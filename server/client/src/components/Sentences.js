import React, { useState } from 'react'

const Sentences = ({ sentences }) => {
    const [sentenceCount, setSentenceCount] = useState(0);
    function upCount() {
        if (sentenceCount + 1 < sentences.length) {
            setSentenceCount(sentenceCount + 1);
        } else {
            setSentenceCount(0);
        }
    }
    function downCount() {
        if (sentenceCount - 1 < 0) {
            setSentenceCount(sentences.length - 1);
        } else {
            setSentenceCount(sentenceCount - 1);
        }
    }
    return (
        <div>
            <div className="sentences">
                {sentences[sentenceCount]}
            </div>
            <br/><br/>
            <div className="sentenceButtons">
                <button className="sentenceButton" onClick={downCount}>Previous</button>
                <div className="sentenceNumber">{sentenceCount + 1} / {sentences.length}</div>
                <button className="sentenceButton" onClick={upCount}>Next</button>
            </div>
        </div>
    )
}

export default Sentences
