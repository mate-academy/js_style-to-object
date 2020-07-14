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
  // write your code here
  const stylesObj = {};
  const stylesArr = sourceString.split(';');

  stylesArr.forEach(elem => {
    const prop = elem.split(':');

    if (prop[1]) {
      stylesObj[prop[0].trim()] = prop[1].trim();
    }
  });

  return stylesObj;
}

module.exports = convertToObject;
