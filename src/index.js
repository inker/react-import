import React, { PureComponent } from 'react'

class Import extends PureComponent {
  state = {
    Component: null,
  }

  componentDidMount() {
    const { props } = this
    this.load(props.load ? props.load() : props.component)
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps.load ? nextProps.load() : nextProps.component)
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
