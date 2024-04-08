'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';').filter(Boolean);

  const result = {};

  for (const style of styles) {
    const [key, value] = style.split(':').map((part) => part.trim());

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}
module.exports = convertToObject;
