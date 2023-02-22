'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = sourceString.split(';').reduce((newObject, element) => {
    const [key, value] = element.split(':');

    if (value) {
      newObject[key.trim()] = value.trim();
    }

    return newObject;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
