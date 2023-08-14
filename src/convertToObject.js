'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .filter(property => property.trim())
    .reduce((styleList, property) => {
      const [ keyProperty, valueProperty ] = property.split(':');

      if (keyProperty && valueProperty) {
        styleList[keyProperty.trim()] = valueProperty.trim();
      }

      return styleList;
    }, {});

  return styles;
}

module.exports = convertToObject;
