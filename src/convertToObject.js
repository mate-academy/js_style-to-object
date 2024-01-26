'use strict';

/*
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';')
    .map(string => string.trim());

  const resultObject = {};

  result.forEach(style => {
    const [objectName, objectValue] = style.split(':')
      .map(value => value.trim());

    if (objectName && objectValue) {
      resultObject[objectName] = objectValue;
    }
  });

  return resultObject;
}

module.exports = convertToObject;
