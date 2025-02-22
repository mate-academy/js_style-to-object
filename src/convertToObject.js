'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newObject = {};
  const clearString = sourceString.trim();
  const separation = clearString.split(';');

  separation.forEach((declaration) => {
    const [key, value] = declaration.split(':').map((part) => part.trim());

    if (key && value) {
      newObject[key] = value;
    }
  });

  return newObject;
}

module.exports = convertToObject;
