'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  sourceString
    .split(';')
    .map(property => property.trim())
    .filter(property => property !== '')
    .forEach(property => {
      const [key, value] = property.split(':')
        .map(item => item.trim());

      object[key] = value;
    });

  return object;
}

module.exports = convertToObject;
