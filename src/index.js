import { PureComponent } from 'react'

class Import extends PureComponent {
  state = {
    Component: null,
  }

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
    return Component ? <Component {...props} /> : null 
  }
}

export default Import
