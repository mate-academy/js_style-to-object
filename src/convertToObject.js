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
  const styles = sourceString.split(';');

  return styles.reduce((prev, el) => {
    if (el.trim() !== '' && el.trim() !== ' ') {
      const [key, value] = el.split(':');

      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }

    return { ...prev };
  }, {});
}
module.exports = convertToObject;
