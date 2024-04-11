'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resultObj = {};
  const array = sourceString.split(';').map(pair => pair.trim());

  array.forEach(pair => {
    const [property, value] = pair
      .split(':').map(item => item.trim());

    if (property && value) {
      resultObj[property] = value;
    }
  });

  return resultObj;
}

module.exports = convertToObject;
