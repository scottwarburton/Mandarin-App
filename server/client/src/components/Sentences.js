import React from 'react'

const Sentences = ({ sentences }) => {
    return (
        <ul className="sentences">
            {sentences.map(item => {
                return <li key={item}>{item}</li>
            })}
        </ul>
    )
}

export default Sentences
