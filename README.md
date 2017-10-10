Save / Load redux state snapshot.

## Use for

It's for test. We can save react components current snapshot and quickly switch to.

## How to

````tsx
import * as ReactSnapShot from 'react-snapshot'

const store = createStore(ReactSnapShot.injectReducer(reducers))

render(<Provider store={store}>
  <App />
</Provider>, root)

const saveRedux = ReactSnapShot.saveRedux(store)
const loadRedux = ReactSnapShot.loadRedux(store)

// save snapshot
const snap = saveRedux()

// load snapshot
const snap = loadRedux()
````
