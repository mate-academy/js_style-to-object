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
  const splitSourceString = sourceString.split(';')
    .map(style => style
      .split(':')
      .map(item => item.trim()))
    .filter(item => item.length > 1);

  const styles = splitSourceString.reduce((accum, [key, value]) => ({
    ...accum, [key]: value,
  }), {});

  return styles;
};

module.exports = convertToObject;
