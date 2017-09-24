# react-import

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

A wrapper for lazy import of React components

## Installation
```
npm install --save react-import
```

## Usage
Basic usage:
```javascript
import React, { PureComponent } from 'react'
import Import from 'react-import'

class MyComponent extends PureComponent {
  // ...

  render() {
    // ...
    return (
      <div>
        <Import
          component={import('./another-component')}
          some="prop"
          another={1}
        />
      </div>
    )
  }
}
```

You can also pass an import function as `load` prop which will be called once the `Import` component is mounted.
```javascript
    // ...
    return (
      <Import
        load={() => import('./another-component')}
        some="prop"
        another={1}
      />
    )
    // ...
```

[npm-url]: https://npmjs.org/package/react-import
[downloads-image]: http://img.shields.io/npm/dm/react-import.svg
[npm-image]: http://img.shields.io/npm/v/react-import.svg
[david-dm-url]:https://david-dm.org/inker/react-import
[david-dm-image]:https://david-dm.org/inker/react-import.svg
[david-dm-dev-url]:https://david-dm.org/inker/react-import#info=devDependencies
[david-dm-dev-image]:https://david-dm.org/inker/react-import/dev-status.svg
