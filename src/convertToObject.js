'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const newString = sourceString.replace(/\n/g, '');
  const outputObject = newString
    .split(';')
    .filter(x => x.length > 2)
    .map(y => y.split(':').map(z => z.trim()))
    .reduce((a, word) => ({
      ...a,
      [word[0]]: word[1],
    }), {});

  return outputObject;
}

module.exports = convertToObject;
