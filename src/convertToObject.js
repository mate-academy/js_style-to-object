'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line !== '')
    .map((line) => {
      const [key, value] = line.split(':').map((part) => part.trim());

      if (key && value) {
        return { [key]: value };
      }

      return null;
    })
    .filter((item) => item !== null)
    .reduce((acc, current) => {
      return { ...acc, ...current };
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
