'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const propertiesArray = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter((el) => el !== '');

  return propertiesArray.reduce((styleObject, elOfArray) => {
    const [key, value] = elOfArray.split(':').map((el) => el.trim());

    styleObject[key] = value;

    return styleObject;
  }, {});
}

module.exports = convertToObject;
