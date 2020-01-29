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
  const list = sourceString
    .split(';')
    .map(item => item
      .trim())
    .filter(el => el.length > 0)
    .map(item => item.split(':')
      .map(i => i.trim()));

  const map = new Map(list);

  const stylesObject = Object.fromEntries(map);

  return stylesObject;
}

module.exports = convertToObject;
