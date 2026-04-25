'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  sourceString.split(';').map((el) => {
    if (!el.includes(':')) {
      return null;
    }

    const [name, value] = el.split(':');

    if (!name || !value) {
      return null;
    }

    stylesObject[name.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
