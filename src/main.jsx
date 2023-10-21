import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { default as thunk } from 'redux-thunk'

import App from './App.jsx'
import './index.css'
import reducers from './reducers'

  // ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App />
  // </React.StrictMode>,
  // )

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
