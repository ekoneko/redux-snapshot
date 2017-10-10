import * as React from 'react'

function SubB(props) {
  const {value, onChange} = props
  return <input value={value} onChange={onChange} />
}

export default class B extends React.PureComponent<any, any> {
  state = {
    value: ''
  }

  onChange = (ev) => {
    const value = ev.target.value
    this.setState({value})
  }

  render() {
    const value = this.props.b
    return <SubB value={value} onChange={this.onChange} />
  }
}
