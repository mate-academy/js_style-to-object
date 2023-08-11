'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an
 *  example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectString = {};
  const splitedEnter = sourceString.split('\n')
    .map((line) => {
      return line.replace(';', ' ').split(' ').filter((words) => {
        return words;
      }).join(' ');
    });

  splitedEnter.map(
    (element) => {
      const data = element.split(':');
      let value = '';

      const key = data[0].split('').filter((letter) => {
        return letter !== ' ';
      }).join('');

      if (data.length >= 2) {
        value = data[1].slice(1);
      }
      // console.log(data[1]);

      if (data.length >= 2) {
        objectString[key] = value;
      }
    }
  );

  return objectString;
  // write your code here
}

module.exports = convertToObject;
