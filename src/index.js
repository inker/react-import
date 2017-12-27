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
    const { props } = this
    if (nextProps.component === props.component && nextProps.load === props.load) {
      return
    }
    this.load(nextProps.load ? nextProps.load() : nextProps.component)
  }

  load(component) {
    if (!component) {
      return
    }
    component.then(mod => {
      this.setState({
        Component: mod.default || mod,
      })
      const { onLoad } = this.props
      if (onLoad) {
        onLoad()
      }
    })
  }

  render() {
    const { component, loading, ...props } = this.props
    const { Component } = this.state
    return Component ? <Component {...props} /> : loading || null
  }
}

export default Import
