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
  const result = sourceString
    .replace(/\n/gi, '') // first we remove all line breaks
    .split(';') // create an array of properties
    .map(element => element.split(':') // split each property into key-values
      .map(item => item.trim()))
    // for each element, remove the spaces on the sides
    .filter(item => item.length > 1)
    // filter from empty values (could have appeared after splitting)
    .reduce((prev, [key, value]) =>
    // we create an object where for each property we write its key and value
      ({
        ...prev,
        [key]: value,
      }), {});

  return result;
}

module.exports = convertToObject;
