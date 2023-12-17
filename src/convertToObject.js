'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const cleaned = sourceString.replace(/\n/g, '');
  const splited = cleaned.split(';');

  for (let i = 0; i < splited.length; i++) {
    if (splited[i].trim().length !== 0) {
      const objEntries = splited[i].split(':');

      obj[objEntries[0].trim()] = objEntries[1].trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
