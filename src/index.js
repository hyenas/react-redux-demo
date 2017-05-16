import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import AddTodo from './containers/AddTodo'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <AddTodo />
  </Provider>,
  document.getElementById('root')
)
