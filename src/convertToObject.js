'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const css = {};
  const editedArray = sourceString.split(';');

  editedArray.forEach((property) => {
    const prop = property.split(':');

    if (prop[1] !== undefined) {
      css[prop[0].trim()] = prop[1].trim();
    }
  });

  return css;
}

module.exports = convertToObject;
