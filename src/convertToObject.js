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

  classesArr.forEach(item => {
    const arrItems = item.split(':');
    classesObj[arrItems[0].trim()] = arrItems[1].trim();

    return classesObj;
  });

  return classesObj;
}

module.exports = convertToObject;
