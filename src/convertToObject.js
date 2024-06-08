'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};

  const styleArray = sourceString.split(';');
  const removingSpaces = styleArray.map((lines) => lines.trim());
  const filterValues = removingSpaces.filter((elem) => elem !== '');

  filterValues.forEach((elem) => {
    const [key, value] = elem.split(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  });

  return stylesObject;
}

module.exports = convertToObject;
