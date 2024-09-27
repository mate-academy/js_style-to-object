'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here

  const objectFromArr = sourceString.split(';')
  .reduce((acc, currentVal) => {
    const [key, value] = currentVal.split(':').map(item => item.trim());
    if (key && value) {
      acc[key] = value;
    }
    return acc
  }, {});

  return objectFromArr;
}

module.exports = convertToObject;
