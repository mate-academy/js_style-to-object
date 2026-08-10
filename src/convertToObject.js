'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const convertedObject = {};
  const sourceLines = sourceString.split(';');

  if (sourceString.length === 0) {
    return convertedObject;
  }

  sourceLines.map((line) => {
    let [attribute, value] = line.split(':');

    if (line !== '' && line.trim().length !== 0) {
      attribute = attribute.trim();
      value = value.trim();

      convertedObject[attribute] = value;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
