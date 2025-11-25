import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './home.jsx'  // Remove .jsx extension as it's not needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)