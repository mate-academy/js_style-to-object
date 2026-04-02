'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const styleString = sourceString.split(';');

  styleString.forEach((x) => {
    if (!x.trim()) {
      return;
    }

    const [name, value] = x.split(':');

    stylesObject[name.trim()] = value.trim();
  });

  return stylesObject;
}

module.exports = convertToObject;
