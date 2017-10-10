import * as React from 'react'
import * as redux from 'redux'

export const saveRedux = (store: redux.Store<any>) => () => {
  const currentState = store.getState()
  return JSON.stringify(currentState)
}

export const loadRedux = (store: redux.Store<any>) => (snapshot: any) => {
  store.dispatch({
    type: '__load_snap_shot__',
    state: JSON.parse(snapshot),
  })
}

export const injectReducer = (reducers: (state, action) => any) => (state, action) => {
  const result = reducers(state, action)

  if (action.type === '__load_snap_shot__') {
    return action.state
  }

  return result
}
