import React from 'react'
import ReactDOM from 'react-dom'
import  { Provider as ReduxProvider } from 'react-redux'
import {store} from './Redux/store'
import './index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)