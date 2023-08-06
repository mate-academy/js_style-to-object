'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an exampl
 * e in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of relat
 * ed CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const allEntries = sourceString.split(';');
  const objectEntries = allEntries.filter(entry => entry.trim());
  const object = objectEntries
    .reduce(
      (prev, entry, i) => {
        const key = entry.slice(0, entry.indexOf(':'));
        const value = entry.slice(entry.indexOf(':') + 1);

        return {
          ...prev, [key.trim()]: value.trim(),
        };
      }, {});

  return object;
}

module.exports = convertToObject;
