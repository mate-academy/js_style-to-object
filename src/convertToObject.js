'use strict';

/**
 * Implement convertToObject function:
 *
 * and returns an object where CSS properties are keys
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
