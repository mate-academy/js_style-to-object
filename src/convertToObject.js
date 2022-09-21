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
  const result = {};

  const sourceArray = sourceString.split(';');

  const ArraySeparatedByAColon = sourceArray.map(el => el.split(':'));

  const finiteArray = ArraySeparatedByAColon.filter(el => el.length > 1);

  for (const element of finiteArray) {
    result[element[0].trim()] = element[1].trim();
  };

  return result;
}

module.exports = convertToObject;
