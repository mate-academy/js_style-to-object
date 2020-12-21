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
  const obj = {};

  const arr = sourceString.split(';').map(
    el => el.split(':')
  ).filter(a => a.length > 1);

  const arr2 = arr.map(el =>
    [el[0].trim(), el[1].trim()]
  );

  for (const item of arr2) {
    obj[item[0]] = item[1];
  }

  return obj;
}

module.exports = convertToObject;
