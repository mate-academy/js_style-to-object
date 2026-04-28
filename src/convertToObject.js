'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const res = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    if (!style.trim()) {
      continue;
    }

    const [key, value] = style.split(':');

    if (key && value) {
      res[key.trim()] = value.trim();
    }
  }

  return res;
}

module.exports = convertToObject;
