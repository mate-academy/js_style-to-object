'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

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
