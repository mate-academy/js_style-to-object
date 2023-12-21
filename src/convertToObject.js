'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a
 * string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .filter((phrase) => {
      return phrase.toUpperCase() !== phrase.toLowerCase();
    })
    .reduce((prev, phrase) => {
      const [key, value] = phrase.split(':');

      return {
        ...prev,
        [key.trim()]: value.trim(),
      };
    }, {});

  return (result);
}

module.exports = convertToObject;
