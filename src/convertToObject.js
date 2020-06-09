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

  const emptyLengthItem = 1;
  const allSourseArr = sourceString.split(';\n');
  const deleteSpacesArr = allSourseArr.map(item =>
    item.split(':').map(spaces => spaces.trim()));
  const filterDeleteSpacesArr = deleteSpacesArr.filter(data =>
    data.length > emptyLengthItem);
  const sourseObj = {};

  for (const array in filterDeleteSpacesArr) {
    const [key, value] = filterDeleteSpacesArr[array];

    sourseObj[key] = value;
  }

  return sourseObj;
}

module.exports = convertToObject;
