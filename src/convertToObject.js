'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const propertys = sourceString
    .replace(/;/g, '')
    .split('\n')
    .filter(el => !(/^ *$/).test(el))
    .map((el) => {
      const item = el.split(':');

      item[0] = item[0].trim();
      item[1] = item[1].trim();

      return item;
    });

  return Object.fromEntries(propertys);
}

module.exports = convertToObject;
