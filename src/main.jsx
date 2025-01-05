import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AddHabit } from './components/AddHabit'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddHabit />
  </StrictMode>,
)
