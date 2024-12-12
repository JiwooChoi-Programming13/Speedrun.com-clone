import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home.jsx'
import About from './about.jsx'
import Login from './login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
