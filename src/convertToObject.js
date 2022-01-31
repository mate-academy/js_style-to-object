'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString
    .split(';')
    .map(styleLine => styleLine.split(':'))
    .filter(styleLine => styleLine.length === 2)
    .map(styleLine => styleLine
      .map(styleProperty => styleProperty.trim())
    );

  const styles = {};

  styleLines.forEach(([ name, value ]) => {
    styles[name] = value;
  });

  return styles;
}

module.exports = convertToObject;
