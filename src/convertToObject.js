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
  const firstLevelArray = sourceString.split(';').map(element => {
    return element.trim();
  });

  const secondLevelArray = firstLevelArray.map(element => {
    return element.split(':').map(item => {
      return item.trim();
    });
  });

  const filteredArray = secondLevelArray.filter(element => {
    return element.every(x => {
      return x.length !== 0;
    });
  });

  const resultingObj = {};

  filteredArray.forEach(element => {
    const key = element[0];

    const value = element[1];

    resultingObj[key] = value;
  });

  return resultingObj;
}

module.exports = convertToObject;
