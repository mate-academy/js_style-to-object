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
const convertToObject = (string) => {
  const result = {};
  const array = string.split(';');

  for (const i in array) {
    array[i] = array[i].replace(/\n/, '').trim();
    const prop = array[i].split(': ');
    result[prop[0]] = prop[1];
  }

  return result;
};

module.exports = convertToObject;
