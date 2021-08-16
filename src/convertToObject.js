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
  const stringArr = sourceString.split(';');

  const formatArr = stringArr
    .map(element => element
      .split(':')
      .map(stringItem => stringItem.trim()))
    .filter(item => item.length > 1);

  const arrObject = formatArr
    .reduce((prev, prop) => {
      return {
        ...prev,
        [prop[0]]: prop[1],
      };
    }
    , {});

  return arrObject;
}

module.exports = convertToObject;
