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
            <div className="sentenceButtons">
                <button className="selection topicEveryday sentenceButton" onClick={downCount}>Previous</button>
                <div>{sentenceCount + 1} / {sentences.length}</div>
                <button className="selection topicEveryday sentenceButton" onClick={upCount}>Next</button>
            </div>
        </div>
    )
}

export default Sentences
