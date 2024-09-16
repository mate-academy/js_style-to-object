'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProperties = sourceString.split(';');
  const cssObject = {};
  let objectEntries = [];

  objectEntries = cssProperties.map(element => (element.split(':')));

  for (let i = 0; i < objectEntries.length; i++) {
    if (objectEntries[i][0] && objectEntries[i][1]) {
      cssObject[objectEntries[i][0].trim()] = objectEntries[i][1].trim();
    }
  }

  return cssObject;
}

module.exports = convertToObject;
