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
    .trim()
    .replace(/;/g, '')
    .split('\n');

  const convertStyle = styles.reduce((obj, el) => {
    if (el.trim() === '') {
      return obj;
    }

    const [key, value] = el.split(':').map(part => part.trim());

    if (key && value) {
      obj[key] = value;
    }

    return obj;
  }, {});

  return convertStyle;
}

module.exports = convertToObject;
