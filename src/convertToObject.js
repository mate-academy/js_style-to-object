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
  const sourceArray = sourceString.split(';').map(item => item.split(':'));
  const styleObject = {};

  sourceArray.pop();

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i][1] !== undefined) {
      const propertyName = sourceArray[i][0].replace(/\s+/g, ' ').trim();
      const valueName = sourceArray[i][1].replace(/\s+/g, ' ').trim();

      styleObject[propertyName] = valueName;
    }
  }

  return styleObject;
}

module.exports = convertToObject;
