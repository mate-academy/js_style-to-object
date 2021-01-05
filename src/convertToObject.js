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
  const styleArr = sourceString.split(';');
  const filterArr = styleArr.filter(arr => arr.length > 4);
  const resObj = {};

  for (let i = 0; i < filterArr.length; i++) {
    const prop = filterArr[i].split(':');

    resObj[prop[0].trim()] = prop[1].trim();
  }

  return resObj;
}

module.exports = convertToObject;
