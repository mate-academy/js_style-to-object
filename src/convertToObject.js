'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js]
 * (./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file]
 * (./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter(el => el.includes(':'));

  const result = styles.reduce((obj, property) => {
    const propValue = property.trim().split(':');

    obj[propValue[0].trim()] = propValue[1].trim();

    return obj;
  }, {});

  return result;
}

module.exports = convertToObject;
