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
      const arraysStyles = el.split(':');
      const key = arraysStyles[0];
      const value = arraysStyles[1].replace(/^\s/g, '');

      return {
        ...objectWithStyle, [key]: value,
      };
    }, {});
}

module.exports = convertToObject;
