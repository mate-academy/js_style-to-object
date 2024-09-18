'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    const newStyle = style.trim();

    if (newStyle) {
      const [key, value] = newStyle.split(':');

      if (key && value) {
        result[key.trim()] = value.trim();
      }
    }
  }

  return result;
}

module.exports = convertToObject;
