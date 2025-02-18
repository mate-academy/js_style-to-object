'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const entries = sourceString.split(';');
  const styleObj = {};

  entries.forEach((entry) => {
    let [key, value] = entry.split(':');

    if (value) {
      key = key.trim();
      value = value.trim();
      styleObj[key] = value;
    }
  });

  return styleObj;
}

module.exports = convertToObject;
