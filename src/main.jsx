import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import './App.css'
import { MemoryGame } from './pages/MemoryGame.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

localStorage.setItem('pontuacao', JSON.stringify({ red: 0, blue: 0 }))

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },{
    path: "/memorygame",
    element: <MemoryGame/>
  },
 
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  
)
