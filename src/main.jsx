import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HandleLayout from './Component/HandleLayout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleLayout/>
  </StrictMode>,
)
