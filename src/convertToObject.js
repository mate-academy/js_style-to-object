'use strict';

/**
 * Implement convertToObject function:
 *
 eslint-disable-next-line max-len
 * Function takes a string with styles
 (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedsourceString = sourceString.split(';').join(':').split(':');

  const trimmedArr = splittedsourceString.map((value) => value.trim());

  const filteredArr = trimmedArr.filter(n => n);

  const mapedArr = filteredArr.map((a, index, elements) =>
    [a, elements[index + 1]]);

  const finalArray = mapedArr.filter(function(element, index, array) {
    return (index % 2 === 0);
  });

  return Object.fromEntries(finalArray);
}

module.exports = convertToObject;

// result.push([filtered[i], filtered[i + 1]]);

// return Object.fromEntries(result);
