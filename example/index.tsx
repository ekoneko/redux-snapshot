import * as React from 'react'
import { render } from 'react-dom'
import treeWalk from 'react-tree-walker'
import App from './components/App'
import * as redux from 'redux'
import { createStore, combineReducers } from 'redux'
import { connect, Provider } from 'react-redux'

import * as ReactSnapShot from '../src/index'

declare const window: any

const root = document.getElementById('root')

const reducers = (state = {
  a: '',
  b: '',
}, action) => {
  switch (action.type) {
    case 'changeA':
      return {...state, a: action.value}
    case 'changeB':
      return {...state, b: action.value}
  }
  return state
}

const store = createStore(ReactSnapShot.injectReducer(reducers))

render(<Provider store={store}>
  <App />
</Provider>, root)

window.ReactSnapShot = {}
window.ReactSnapShot.saveRedux = ReactSnapShot.saveRedux(store)
window.ReactSnapShot.loadRedux = ReactSnapShot.loadRedux(store)
