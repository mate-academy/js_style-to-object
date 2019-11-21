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
  const classesObj = {};
  const classesArr = sourceString.split(';')
    .map(el => el.replace(/\s+/g, ' ').trim())
    .filter(el => el.length > 0);

  classesArr.reduce((accumulator, item) => {
    const arrItems = item.split(':');
    accumulator[arrItems[0].trim()] = arrItems[1].trim();
    return accumulator;
  }, classesObj);

  return classesObj;
}

module.exports = convertToObject;
