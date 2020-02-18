/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const fse = require('fs-extra');
const chalk = require('chalk');

/**
 * Generate JSON file containing localized classnames for a particular stylesheet.
 * For use in the getJSON option in postcss-modules
 *
 * @param {string} cssFileName Full filepath of CSS file currently being processed
 * @param {object} classnames Object ontaining mapping of localized classnames
 */
module.exports = function localClasses(cssFileName, manifest) {
  const cssFileInfo = path.parse(cssFileName);
  const classnames = Object.keys(manifest).reduce((acc, classname) => {
    if (
      ! hasInvalidCharacters(classname)
      && ! hasInvalidCharacters(manifest[classname])
    ) {
      acc[classname] = manifest[classname];
    }

    return acc;
  }, {});

  addToGlobalManifest(cssFileInfo.name, classnames);
};

/**
 * Generate JSON file containing all localized classnames, keyed by filename
 *
 * @param {string} filename Filename of CSS file currently being processed
 * @param {object} manifest Object containing mapping of localized classnames
 */
function addToGlobalManifest(filename, manifest) {
  let globalManifest;
  const outputPath = path.join(process.env.PWD, 'classnames.json');

  try {
    globalManifest = JSON.parse(fse.readFileSync(outputPath, 'utf8'));
  } catch (error) {
    globalManifest = {};
  }

  globalManifest[filename] = manifest;
  fse.outputFileSync(outputPath, JSON.stringify(globalManifest));
}

/**
 * Used to make sure values in the JSON don't contain unexpected characters.
 *
 * NOTE: This is a negated character set because we're looking for
 *  anything that _isn't_ one of these characters.
 *
 * @param {string} value string to validate
 * @returns {bool} whether or not value contains unsafe characters
 */
function hasInvalidCharacters(value) {
  const assetRegex = new RegExp('[^\\/\\.\\-_a-zA-Z0-9\\s]', 'g');

  if (assetRegex.test(value)) {
    console.log(chalk.red(`Attempted to write invalid value '${value}' to static asset JSON manifest. All JSON values must match ${assetRegex}`)); // eslint-disable-line max-len, no-console
    return true;
  }

  return false;
}
