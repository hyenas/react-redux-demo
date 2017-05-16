import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddTodo from './containers/AddTodo'
import MainPage from './containers/MainPage'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <MainPage />
  </Provider>,
  document.getElementById('root')
)
