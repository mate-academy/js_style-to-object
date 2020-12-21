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
  const filter = sourceString
    .split(';');

  let arr = [];

  for (const each of filter) {
    arr.push(each.split(':').map(str => str.trim()));
  }

  arr = arr.filter(elem => elem.length > 1);

  const final = {};

  for (const each of arr) {
    final[each[0]] = each[1];
  }

  return final;
}

module.exports = convertToObject;
