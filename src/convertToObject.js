'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssToObj = {};

  sourceString.split(';').map(property => {
    return property.split(':');
  }).map(property => {
    if (property.length > 1) {
      cssToObj[property[0].trim()] = property[1].trim();
    }
  });

  return cssToObj;
}

module.exports = convertToObject;
