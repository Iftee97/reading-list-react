import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BooksContextProvider } from './context/books'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksContextProvider>
      <App />
    </BooksContextProvider>
  </React.StrictMode>
)