'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssClasses = sourceString.split(';')
    .map(cssClass => cssClass.trim())
    .filter(Boolean)
    .map(cssClass => cssClass.split(':'))
    .reduce((classes, classCss) =>
      ({
        ...classes,
        [classCss[0].trim()]: classCss[1].trim(),
      }), {});

  return cssClasses;
}

module.exports = convertToObject;
