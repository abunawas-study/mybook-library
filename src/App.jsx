import { createRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Router } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Favourites from './pages/Favourites'
import AI_Assistant from './pages/AI_Assistant'
import BookDetails from './pages/BookDetails'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/favourites',
            element: <Favourites />
        },
        {
            path: '/ai-assistant',
            element: <AI_Assistant />
        },
        {
            path: '/book/:id',
            element: <BookDetails />
        }
    ])
    return < RouterProvider router={router}/>
}
export default App
