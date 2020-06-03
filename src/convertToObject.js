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
  const splitedStyle = sourceString.split(';');
  const convertObj = {};

  splitedStyle.forEach(element => {
    const value = element.split(':');

    if (value[1]) {
      convertObj[value[0].trim()] = value[1].trim();
    }
  });

  return convertObj;
}

module.exports = convertToObject;
