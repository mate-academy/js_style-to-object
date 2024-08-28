'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const styles = sourceString.split(';');

  styles.forEach((style) => {
    const parts = style.split(':');

    if (parts.length < 2) {
      return;
    }

    const key = parts[0].trim();
    const value = parts[1].trim();

    obj[key] = value;
  });

  return obj;
}

module.exports = convertToObject;
