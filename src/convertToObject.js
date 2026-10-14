'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const styleObject = {};

  styles.split(';').forEach((declaration) => {
    const [key, ...value] = declaration.split(':');

    if (value.length > 0 && key.trim()) {
      styleObject[key.trim()] = value.join(':').trim();
    }
  });

  return styleObject;
}

module.exports = convertToObject;
