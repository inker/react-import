import React, { PureComponent } from 'react'

class Import extends PureComponent {
  state = {
    Component: null,
  }

  componentDidMount() {
    const { props } = this
    this.load(props.component || props.load())
  }

  componentWillReceiveProps(nextProps) {
    this.load(nextProps.component || nextProps.load())
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
