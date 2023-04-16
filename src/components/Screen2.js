import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '.././styles/Screen2.css' // import external CSS file

function Screen2() {
    const { text } = useParams() // extract the text from the URL
    const [letters, setLetters] = useState(text.split('')) // convert text to array of characters

    const handleDelete = (letter, index) => {
        const filteredLetters = letters.filter(
            (l, i) => l !== letter || i === index
        )
        setLetters(filteredLetters)
    }

    const getColor = (letter) => {
        const index = letters.indexOf(letter)
        const colors = [
            '#F6C5C1',
            '#C5F6D6',
            '#FADBB7',
            '#A3E7FC',
            '#C0C5F6',
            '#F5A5D9',
            '#F5D6A5',
            '#D5F5A5',
            '#A5F5E1',
            '#D8F5A5',
        ]
        return colors[index % colors.length]
    }

    const chars = Array.from(new Set(letters))
    const hasDuplicates = chars.some(
        (c) => letters.filter((l) => l === c).length > 1
    )

    const resultText = letters.join('')
    const originalText = text

    return (
        <div className="info">
            <h2>Screen 2</h2>
            <div className="card-container">
                {letters.map((letter, index) => {
                    const backgroundColor = getColor(letter)
                    return (
                        <Card
                            key={index}
                            className="custom-card"
                            style={{ backgroundColor }}
                        >
                            <Card.Body>
                                <Card.Text>{letter}</Card.Text>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(letter, index)}
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    )
                })}
            </div>
            {hasDuplicates ? null : (
                <div className="result-container">
                    <h1>Original string: {originalText}</h1>
                    <h1>New string: {resultText}</h1>
                </div>
            )}
            {hasDuplicates ? null : (
                <div className="success-message-container">
                    <h3>Success!</h3>
                </div>
            )}
            <div className="back-button-container">
                <Button variant="primary" onClick={() => window.history.back()}>
                    Back
                </Button>
            </div>
        </div>
    )
}

export default Screen2
