'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const result = {};
  const styles = sourceString.split(';')
    .map(item => item.trim()).filter(item => item.length !== 0);

  styles.forEach(item => {
    result[item.split(':')[0].trim()] = item.split(':')[1].trim();
  }
  );

  return result;
}

module.exports = convertToObject;
