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
  const newObj = {};

  sourceString.split(';').map(element => {
    const newEl = element.split(':');

    if (newEl.length === 2) {
      newObj[newEl[0].trim()] = newEl[1].trim();
    }
  });

  return newObj;
}

module.exports = convertToObject;
