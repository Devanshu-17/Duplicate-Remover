import React from 'react'
import '.././styles/styles.css'
import githubImage from '.././assets/github.png'

export default function About() {
    return (
        <div className="info">
            <div>
                <h1>This project was created by Devanshu Mahapatra</h1>
                <br></br>
                <div className="social-links">
                    <a href="https://github.com/Devanshu-17">
                        <img src={githubImage} alt="Github Profile" />
                    </a>
                    <a href="https://www.linkedin.com/in/devanshu-mahapatra-05095921a/">
                        <img
                            src="https://img.icons8.com/3d-fluency/94/null/linkedin.png"
                            alt="LinkedIn Profile"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
