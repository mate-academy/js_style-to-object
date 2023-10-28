'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 *  in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrFromStr = sourceString.split(';');

  const creatObject = arrFromStr
    .map(el => el.split(':'))
    .filter(el => el.length > 1)
    .map(el => getClearElement(el))
    .reduce((acc, el) => {
      const [key, value] = el;

      return {
        ...acc, [key]: value,
      };
    }, {});

  return creatObject;
}

function getClearElement(item) {
  const [a, b] = item;

  return [a.trim(), b.trim()];
}

module.exports = convertToObject;
