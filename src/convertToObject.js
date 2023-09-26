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
  const solutionObject = {};
  const sourceArray = sourceString
    .split(';') // split the string into an array of names and their values
    .map(el => el.split(':'))
    // split the elements into arrays of a key and value each
    .filter(el => el.length > 1) // remove the invalid elements
    .map(el => [ // clear up line breaks and spaces
      el[0]
        .replace(/\n/g, '')
        .trim(),
      el[1].trim(),
    ]);

  sourceArray.forEach(el => {
    // add array elements as keys and values in an object
    solutionObject[el[0]] = el[1];
  });

  return solutionObject;
}

module.exports = convertToObject;
