import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const title = 'React';

// This sends the one large JavaScript file to the small HTML file
ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <h1>Yo, {title}</h1>
    <App />
  </div>,
)
