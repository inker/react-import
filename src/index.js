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
    }).catch(err => {
      const { props } = this
      this.setState({
        Component: props.error,
      })
      if (props.onError) {
        props.onError(err)
      } else {
        throw new Error(err)
      }
    })
  }

  render() {
    const {
      component,
      load,
      ...props
    } = this.props
    const { Component } = this.state
    return Component ? <Component {...props} /> : props.loading || null
  }
}

export default Import
