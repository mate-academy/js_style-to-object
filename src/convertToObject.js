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
  const pairs = sourceString.split(';');
  let validPairs = pairs.map((n) => n.trim());
  const validItems = [];
  const result = {};

  validPairs = validPairs.filter((n) => n !== '');

  const items = validPairs.map((n) => n.split(':'));

  items.map((m, index) => {
    validItems.push([]);
    validItems[index].push(items[index][0].trim());
    validItems[index].push(items[index][1].trim());
  });

  validItems.forEach((item) => {
    result[item[0]] = item[1];
  });

  return result;
}

module.exports = convertToObject;
