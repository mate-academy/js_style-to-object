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

  const arr = sourceString.split(';').map(elem => elem.trim());

  const newArr = arr.filter(char => char);

  newArr.map(item => {
    const [key, value] = item.split(':');

    obj[key.trim()] = value.trim();
  });

  return obj;
}

module.exports = convertToObject;
