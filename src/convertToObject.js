'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const objStyle = {};

  sourceString.split(';').forEach((el) => {
    const trim = el.trim();

    if (!trim) {
      return;
    }

    const [key, values = ''] = trim.split(':');

    objStyle[key.trim()] = values.trim();
  });

  return objStyle;
}

module.exports = convertToObject;
