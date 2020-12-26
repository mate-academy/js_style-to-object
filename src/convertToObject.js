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
  const resObj = {};
  const stylesArray = sourceString
    .split(';')
    .map((el) => {
      return el.split(':').map((style) => style.trim());
    })
    .filter((el) => el.length > 1);

  stylesArray.forEach((el) => {
    resObj[el[0]] = el[1];
  });

  return resObj;
}

module.exports = convertToObject;
