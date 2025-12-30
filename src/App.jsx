import { createRef, useState } from 'react'
import './App.css'
import { createBrowserRouter, Route, Router, Routes } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Favourites from './pages/Favourites'
import AI_Assistant from './pages/AI_Assistant'
import BookDetails from './pages/BookDetails'

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/ai-assistant" element={<AI_Assistant />} />
                <Route path="/book-details/:id" element={<BookDetails />} />
            </Routes>
        </Router>
    )
}
export default App
