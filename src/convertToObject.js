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
  const convertedArr = sourceString.split(';');
  const convertedObj = {};

  convertedArr.forEach(property => {
    const propertiesCSS = property.split(':').map(value => value.trim());

    if (propertiesCSS.length > 1) {
      convertedObj[propertiesCSS[0]] = propertiesCSS[1];
    }
  });

  return convertedObj;
}

module.exports = convertToObject;
