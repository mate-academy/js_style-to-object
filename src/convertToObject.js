'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  const propertiesArray = sourceString.split(';');

  propertiesArray.map((item) => {
    if (item.length >= 2) {
      const element = item.split(':').map((el) => el.trim());

      cssObject[element[0]] = element[1];
    }
  });

  return cssObject;
}

module.exports = convertToObject;
