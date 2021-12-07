'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const arrayOfValues = sourceString.split(';');
  const object = arrayOfValues.reduce((prev, element) => {
    const arrTemp = element.split(':');
    let key = '';
    let value = '';

    if (arrTemp.length === 2) {
      key = arrTemp[0].trim();
      value = arrTemp[1].trim();

      return {
        ...prev,
        [key]: value,
      };
    } else {
      return { ...prev };
    }
  }, {});

  return object;
}

module.exports = convertToObject;
