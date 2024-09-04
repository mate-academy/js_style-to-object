'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styles) {
  const cssProperties = styles.split(';').reduce((acc, declaration) => {
    const [key, value] = declaration.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
