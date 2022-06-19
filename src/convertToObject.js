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
  const properties = sourceString.split(';');
  const cssProperties = properties.reduce((cssPropertyName, cssPropetyRule) => {
    const convertedCssStyles = cssPropetyRule.split(':');

    return convertedCssStyles[1]
      ? {
        ...cssPropertyName,
        [convertedCssStyles[0].trim()]: convertedCssStyles[1].trim(),
      }
      : cssPropertyName;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
