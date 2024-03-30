import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.js'
import { ThemeProvider } from './context/themeContext.jsx'
import { UserProvider } from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <ThemeProvider>
      <UserProvider>
       <App/>
    </UserProvider>
    </ThemeProvider>
  </Provider>
  </BrowserRouter>,
)
