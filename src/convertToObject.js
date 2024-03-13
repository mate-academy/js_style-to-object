'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');
  const result = array.reduce((container, string) => {
    const smallArray = string.split(':');

    if (smallArray.length === 2) {
      const key = smallArray[0].trim();
      const value = smallArray[1].trim();

      if (key !== '' && value !== 'undefined') {
        container[key] = value;
      }
    }

    return container;
  }, {});

  return result;
}

module.exports = convertToObject;
