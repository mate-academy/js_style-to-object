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

const propertyIndex = 0;
const valueIndex = 1;

function convertToObject(sourceString) {
  // write your code here
  const splitedStr = sourceString.split(';');
  const mappedObj = splitedStr
    .map(element => {
      const splited = element.split(':')
        .map(property => property.trim());
      const key = splited[propertyIndex];
      const value = splited[valueIndex];

      if (key === '') {
        return;
      }

      return {
        [key]: value,
      };
    });

  return mappedObj.reduce((obj1, obj2) => {
    return {
      ...obj1,
      ...obj2,
    };
  }, {});
}

module.exports = convertToObject;
