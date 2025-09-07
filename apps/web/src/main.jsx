import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastProvider } from './hooks/useToast'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import { AuthProvider } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ToastProvider>
    <Analytics />
  </StrictMode>,
)
