import { PureComponent } from 'react'

class Import extends PureComponent {
  componentDidMount() {
    this.load(this.props.component)
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps.component)
  }

  load(component) {
    if (!component) {
      return
    }
    component.then(module => {
      this.setState({
        Component: module.default || module,
      })
    })
  }

  render() {
    const { component, ...props } = this.props
    const { Component } = this.state
    return !Component ? null : <Component {...props} />
  }
}

export default Import
