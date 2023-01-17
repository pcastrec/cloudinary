import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App/App'
import { Formulaire } from './components/Form/Formulaire'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Formulaire />
  </React.StrictMode>
)
