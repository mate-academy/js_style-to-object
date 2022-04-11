'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const noSemi = sourceString.split(';');

  const separ = noSemi.map(elem => {
    const indexColon = elem.indexOf(':');

    const keyValue = indexColon >= 0
      ? elem.split(':')
      : undefined;

    return keyValue;
  });

  const result = {};

  for (const x of separ) {
    if (x !== undefined) {
      result[x[0].replace(/\n/g, '').trim()] = x[1].trim();
    }
  }

  return result;
}

module.exports = convertToObject;
