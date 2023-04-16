import React from 'react'

import About from './components/About'
import Home from './components/Home'

import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'
import Nav from './components/Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route exact path="/Screen1" element={<Screen1 />} />
                    <Route path="/Screen2/:text" element={<Screen2 />} />
                </Routes>
            </div>
        </Router>
    )
}
