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
const PROPERTY_SEPARATOR = ';';
const PROPERTY_VALUE_SEPARATOR = ':';

function convertToObject(sourceString) {
  const styles = sourceString
    .split(PROPERTY_SEPARATOR)
    .reduce((prev, styleStr) => {
      const [styleName, styleValue] = styleStr.split(PROPERTY_VALUE_SEPARATOR);

      if (styleName && styleValue) {
        prev[styleName.trim()] = styleValue.trim();
      }

      return prev;
    }, {});

  return styles;
}

module.exports = convertToObject;
