import * as React from 'react'
import { connect } from 'react-redux'

class A extends React.PureComponent<any, any> {
  onChange = (ev) => {
    const value = ev.target.value
    this.props.dispatch({
      type: 'changeA',
      value,
    })
  }

  render() {
    const value = this.props.a
    return <input value={value} onChange={this.onChange} />
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({dispatch})

export default connect(mapStateToProps, mapDispatchToProps)(A)
