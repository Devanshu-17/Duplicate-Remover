import React, { useState } from 'react'
import '.././styles/Screen1.css'

export default function Screen1() {
    const [text, setText] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim() === '') {
            setErrorMsg(<h4>Please enter some text.</h4>)
            return
        }
        window.location.href = `/Screen2/${text}`
    }

    return (
        <div className="info">
            <h2>Screen 1</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <h3>Enter text:</h3>
                    <input
                        type="text"
                        value={text}
                        onChange={handleTextChange}
                    />
                </label>
                <button type="submit">Submit</button>
                {errorMsg && <p className="error">{errorMsg}</p>}
            </form>
        </div>
    )
}
