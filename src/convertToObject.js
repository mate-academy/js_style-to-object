'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';').reduce((stylesObject, item) => {
    const [key, value] = item.split(':').map((el) => el.trim());

    stylesObject[key] = value;

    return stylesObject;
  }, {});
}

module.exports = convertToObject;
