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
  const arr = sourceString.split(';')
    .filter(item => (
      item.trim() !== '\n' && item.trim() !== '\n\n' && item.trim() !== ''
    ));

  return arr.reduce((acc, currentValue) => {
    const arrItem = currentValue.trim().split(':');
    const key = arrItem[0].trim();
    const value = arrItem[1].trim();

    return {
      ...acc, [key]: `${value}`,
    };
  }, {});
}

module.exports = convertToObject;
