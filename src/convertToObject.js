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
function convertToObject(stylesString) {
  // write your code here
  const generatedObject = {};
  const sourseArray = stylesString.replace(/\n/g, '').split(';');
  sourseArray.pop();
  sourseArray.forEach(generateObjectFromArray);

  function generateObjectFromArray(sourseArrayMember) {
    const arrayOfStrings = sourseArrayMember.split(':');
    const key = arrayOfStrings[0].trim();
    const value = arrayOfStrings[1].trim();
    generatedObject[key] = value;
  }
  return (generatedObject);
}

module.exports = convertToObject;
