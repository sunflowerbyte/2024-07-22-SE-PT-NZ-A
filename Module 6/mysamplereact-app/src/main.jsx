import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorMessage from './Components/ErrorMessage.jsx'
import { ErrorBoundary } from 'react-error-boundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ErrorBoundary FallbackComponent ={ErrorMessage}>
    <App />
 </ErrorBoundary> 
 </StrictMode>,
)
