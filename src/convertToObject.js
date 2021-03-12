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
  const styleObject = {};
  const splitSouresSting = sourceString.split(';');
  const propertyList = [];

  for (let i = 0; i < splitSouresSting.length; i++) {
    propertyList.push(splitSouresSting[i].split(':'));
  }

  for (let i = 0; i < propertyList.length; i++) {
    if (propertyList[i][1] !== undefined) {
      styleObject[propertyList[i][0].trim()]
       = propertyList[i][1].trim();
    }
  }

  return styleObject;
}

module.exports = convertToObject;
