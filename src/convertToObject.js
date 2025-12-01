'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const sourceSplit = sourceString.split(';');

  const cssProperties = {};

  sourceSplit.forEach((element) => {
    const objectValues = element.split(':');

    if (objectValues[1]) {
      cssProperties[objectValues[0].trim(' ')] = objectValues[1].trim(' ');
    }
  });

  return cssProperties;
}

module.exports = convertToObject;
