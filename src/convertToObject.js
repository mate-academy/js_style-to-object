'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const objConvert = {};

  if (!sourceString.trim()) {
    return objConvert;
  }

  sourceString.split(';').forEach((string) => {
    const [key, value] = string
      .split(':')
      .map((item) => (item ? item.trim() : null));

    if (key && value) {
      const clearValue = value.replace(/;$/, '').trim();

      objConvert[key] = clearValue;
    }
  });

  return objConvert;
}

module.exports = convertToObject;
