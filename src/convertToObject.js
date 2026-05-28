'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const styles = sourceString.split(';');

  for (const style of styles) {
    if (style.trim().length >= 3) {
      const [key, value] = style.split(':');

      const parsedKey = key.trim();
      const parsedValue = value.trim();

      if (parsedKey.length >= 1 && parsedValue.length >= 1) {
        obj[parsedKey] = parsedValue;
      }
    }
  }

  return obj;
}

module.exports = convertToObject;
