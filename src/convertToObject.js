'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(';');

  const object = array.reduce((accumulator, current) => {
    const element = current.split(':');

    if (element.length === 2) {
      const property = element[0].trim();
      const value = element[1].trim();

      accumulator[property] = value;
    }

    return accumulator;
  }, {});

  return object;
}

module.exports = convertToObject;
