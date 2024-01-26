'use strict';

/*
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString.split(';');

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
