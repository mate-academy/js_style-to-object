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
  const stylesObj = {};
  let stylesArr = sourceString.split(';');

  stylesArr = stylesArr.map(element => {
    let valuePair = element.split(':');

    valuePair = valuePair.map(value => value.trim());

    if (valuePair[0] !== '') {
      stylesObj[valuePair[0]] = valuePair[1];
    }

    return valuePair.join(':');
  });

  return stylesObj;
}

module.exports = convertToObject;
