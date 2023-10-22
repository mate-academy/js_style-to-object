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
  const sourceArr = sourceString.replace(/\s +|\n/g, '').split(';');

  return sourceArr
    .filter(item => item !== '')
    .map(str => str.replace(/^:/, ''))
    .reduce((objectWithStyle, el) => {
      const key = el.split(':')[0];
      const value = el.split(':')[1].replace(/^\s/g, '');

      return {
        ...objectWithStyle, [key]: value,
      };
    }, {});
  // return sourceString
  //   .split(';:')
  //   .join(';')
  //   .split(';')
  //   .map(substring => substring.trim())
  //   .filter(substring => substring !== '')
  //   .join(';')
  //   .split(':')
  //   .map(substring => substring.trim())
  //   .join(':')
  //   .split(';')
  //   .map(substring => substring.split(':'))
  //   .reduce((styles, sub, index) => {
  //     return {
  //       ...styles, [sub[0]]: sub[1],
  //     };
  //   }, {});
}

module.exports = convertToObject;
