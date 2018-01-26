import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider> , 
  document.getElementById('root')
)

