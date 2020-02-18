/* eslint-disable max-len */
const jsdom = require('jsdom');
const classnames = require('./mock-classnames.json');
const kebabToCamelCase = require('../src/util/kebabToCamelCase').default;

const { JSDOM } = jsdom;

// h/t https://github.com/airbnb/enzyme/issues/942#issuecomment-314715229
const { document } = (new JSDOM('')).window;

global.window = document.parentWindow;

// The Stylesheets class transforms classnames to be camelCase, so we must do that too.
const camelCasedClassnames = Object.keys(classnames).reduce((acc, component) => {
  const names = Object.keys(classnames[component]).reduce((carry, classname) => {
    const key = kebabToCamelCase(classname);
    const hasedClassname = classnames[component][classname];

    return { ...carry, [key]: hasedClassname };
  }, {});

  return { ...acc, [component]: names };
}, {});

/**
 * Add the global cssModulesClassnames object.
 */
Object.defineProperty(
  global.window,
  'cssModulesClassnames',
  { value: camelCasedClassnames, configurable: true }
);

// Set up our document body
global.document.body.innerHTML = `
  <div>
    <div class="mock-one__alignleft___1cXIA"></div>
    <div class="mock-one__alignright___18ifD"></div>
    <div class="mock-one__title___2kGA7 _typography__header-main___2IME8"></div>
    <div class="mock-one__article-body___RnJE3"></div>
  </div>
  <div>
    <div class="mock-two__alignleft___Lww3s"></div>
    <div class="mock-two__alignright___33Y6O"></div>
    <div class="mock-two__shared-name___Kf9x0"></div>
    <div class="mock-two__shared-name___Kf9x0"></div>
  </div>
`;
