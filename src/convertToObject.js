'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylish = sourceString
    .split(';')
    .filter((things) => things.trim() !== '');

  const result = {};

  for (const thing of stylish) {
    const [property, value] = thing.split(':').map((part) => part.trim());

    result[property] = value;
  }

  return result;
}

module.exports = convertToObject;
