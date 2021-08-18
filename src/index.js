import React from 'react'
import ReactDOM from 'react-dom'

import SettingsContextProvider from './context/SettingsContext'
import App from './App'

import './index.css'

ReactDOM.render(
  <SettingsContextProvider>
    <App />
  </SettingsContextProvider>,
  document.getElementById('root')
)
