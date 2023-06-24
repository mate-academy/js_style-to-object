'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const one = sourceString.split(';');
  const two = one
    .map(char => char.trim())
    .filter(char => char !== '');

  const three = two.map(char => char.split(':'));

  const threeTrim = three.map(char => {
    return char.map(item => item.trim());
  });

  const four = threeTrim.reduce((prev, item) => {
    return {
      ...prev, [item[0]]: item[1],
    };
  },
  {}
  );

  return four;
}

module.exports = convertToObject;
