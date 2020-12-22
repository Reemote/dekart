import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducer'
import { taskMiddleware } from 'react-palm/tasks'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(taskMiddleware, thunk, createLogger())
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
