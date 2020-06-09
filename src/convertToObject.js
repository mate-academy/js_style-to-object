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

  const allSourseArr = sourceString.split(';\n');
  const filterSourseArr = allSourseArr.filter(data => data.length > 3);
  const deleteSpacesArr = filterSourseArr.map(item =>
    item.split(':').map(spaces => spaces.trim()));
  const sourseObj = {};

  for (let i = 0; i < deleteSpacesArr.length; i++) {
    sourseObj[deleteSpacesArr[i][0]] = deleteSpacesArr[i][1];
  }

  return sourseObj;
}

module.exports = convertToObject;
