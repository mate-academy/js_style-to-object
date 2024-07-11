'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObject = {};
  const stringModified = sourceString
    .split(/;\s*/)
    .filter((item) => item.trim() !== '');

  stringModified.forEach((item) => {
    const index = item.indexOf(':');

    if (index !== -1) {
      const objectKey = item.slice(0, index).trim();
      const objectValue = item.slice(index + 1).trim();

      if (resultObject[objectKey]) {
        resultObject[objectKey] += ', ' + objectValue;
      } else {
        resultObject[objectKey] = objectValue;
      }
    }
  });

  return resultObject;
}

module.exports = convertToObject;
