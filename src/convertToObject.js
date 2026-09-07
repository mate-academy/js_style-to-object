'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrString = sourceString.split(';').filter((item) => item !== '');
  const objStyle = {};

  arrString.forEach((item) => {
    const [property, value] = item.split(':');

    if (property !== undefined && value !== undefined) {
      objStyle[property.trim()] = value.trim();
    }
  });

  return objStyle;
}

module.exports = convertToObject;
