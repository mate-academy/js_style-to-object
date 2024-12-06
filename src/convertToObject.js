'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const result = arr.reduce((acc, declaration) => {
    const [key, value] = declaration.split(':').map((item) => item.trim());

    if (key && value) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;

