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
  const startedArray = sourceString
    .split(';')
    .map(el => el.trim());

  const arrayWithoutEmptyStrings = startedArray.filter(el => el.length > 0);

  const formattedObject = {};

  arrayWithoutEmptyStrings.forEach(eachElement => {
    const [key, value] = eachElement
      .split(':')
      .map(el => el.trim());

    formattedObject[key] = value;
  });

  return formattedObject;
}

module.exports = convertToObject;
