'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};

  sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element !== '')
    .map((element) => {
      const temp = element.split(':');

      if (temp.length === 2) {
        const [key, value] = temp.map((newElement) => newElement.trim());

        newObject[key] = value;
      }
    });

  return newObject;
}

module.exports = convertToObject;
