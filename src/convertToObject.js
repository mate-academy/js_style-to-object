'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const toArray = sourceString.split(';');
  const newObject = {};

  toArray.forEach((part) => {
    if (part.trim() !== '') {
      const [property, value] = part.split(':').map((remove) => remove.trim());

      if (property && value) {
        newObject[property] = value;
      }
    }
  });

  return newObject;
}

module.exports = convertToObject;
