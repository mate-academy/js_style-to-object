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
  const final = {};
  const keys = [];
  const values = [];
  const arrayFromString = sourceString.replace(/[\n]/gi, '').split(';');

  arrayFromString.forEach(item => {
    const index = item.indexOf(':');

    keys.push(item.slice(0, index).trim());
    values.push(item.slice(index + 1).trim());
  });

  for (let i = 0; i < keys.length; i++) {
    if (keys[i].length > 0) {
      final[keys[i]] = values[i];
    }
  };

  return final;
}

module.exports = convertToObject;
