import * as React from 'react'
import A from './A'
import B from './B'

export default class App extends React.PureComponent<any, any> {
  render() {
    return (
      <div>
        <A />
        <B />
      </div>
    )
  }
}
