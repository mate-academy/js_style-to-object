'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(styleString) {
  return styleString.split(';').reduce((styleObj, declaration) => {
    const [property, value] = declaration.split(':').map((item) => item.trim());

    if (property && value) {
      styleObj[property] = value;
    }

    return styleObj;
  }, {});
}

module.exports = convertToObject;
