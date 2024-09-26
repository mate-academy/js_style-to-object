/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const stylesObject = {};

  for (const style of styles) {
    const [property, value] = style.split(':');

    if (property && value) {
      stylesObject[property.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
