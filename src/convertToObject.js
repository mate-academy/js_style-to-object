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
  const styleObj = {};

  const styleArr = sourceString
    .split('\n')
    .map(el => {
      const element = el
        .replace(';', '')
        .split(':')
        .map(str => str.trim());

      return element;
    })
    .filter(el => el.length > 1);

  styleArr.map(el => {
    styleObj[el[0]] = el[1];
  });

  return styleObj;
}

module.exports = convertToObject;
