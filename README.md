CSS Modules Helpers
===================

JS Helpers for configuring CSS Modules and selecting hashed DOM selectors.

## Setup

### Install [PostCSS Modules](https://github.com/css-modules/postcss-modules)

```shell
npm i --save-dev postcss-modules css-modules-helpers
```

### Configure PostCSS Modules

`require` the `createManifest` module and pass it to the [PostCSS Modules](https://github.com/css-modules/postcss-modules) `getJSON` option.

```javascript
/* postcss.config.js */

const modules = require('postcss-modules');
const createManifest = require('css-modules-helpers/createManifest');

module.exports = () => ({
  plugins: [
    modules({
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      getJSON: createManifest,
    }),
  ],
});
```

## Usage

Use these functions to retrieve hashed classnames and selectors from the CSS Modules output.

**Note**: Each of these assumes a classname manifest attached to `window.cssModulesClassnames`.

### getComponentClassnames

`getComponentClassnames` will return all classnames associated with a given component. These values are not suitable for use in selecting elements from the DOM, but would be used to `add` or `remove` values from an element's `classList`

```javascript
import { getComponentClassnames } from 'css-modules-helpers';

const classnames = getComponentClassnames('site-header');
// { menuButton: 'site-header__menu-button___2EGUQ', menu: 'site-header__menu___9gIXs' }
```

### getComponentSelectors

`getComponentSelectors` will return all of a component's classnames formatted as DOM selectors. Use this when configuring child selectors for [js-component-framework](https://github.com/alleyinteractive/js-component-framework/). To get only one selector from a component, see `getSelectorFromComponent`.

```javascript
import { getComponentSelectors } from 'css-modules-helpers';

const selectors = getComponentSelectors('site-header');
// { menuButton: '.site-header__menu-button___2EGUQ', menu: '.site-header__menu___9gIXs' }
```

### getElementFromComponent

`getElementFromComponent` will return an element or elements from another component. By default, the function will return a single element; pass `true` as a third parameter to return a NodeList.

```javascript
import { getElementFromComponent } from 'css-modules-helpers';

const element = getElementFromComponent('menu-button', 'site-header');
// <button class="site-header__menu-button___2EGUQ"></button>
```

### getSelectorFromComponent

`getSelectorFromComponent` will return a specific selector from a component. See `getComponentSelectors` to get all of a component's selectors.

```javascript
import { getSelectorFromComponent } from 'css-modules-helpers';

const menuButton = getSelectorFromComponent('menu-button', 'site-header');
// '.site-header__menu-button___2EGUQ'
```
