'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string
 * with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';');

  const convertedStyles = styles.reduce((stylesMap, styleRule) => {
    if (!styleRule.trim()) {
      return stylesMap;
    }

    const [key, value] = styleRule.split(':').map(part => part.trim());

    if (key && value) {
      stylesMap[key] = value;
    }

    return stylesMap;
  }, {});

  return convertedStyles;
}

module.exports = convertToObject;
