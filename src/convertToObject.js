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
  const splittedProp = sourceString.split(';');

  const objectProp = {};

  splittedProp.forEach(item => {
    const eachProp = item.split(':');

    if (eachProp[0] && eachProp[1]) {
      objectProp[eachProp[0].trim()] = eachProp[1].trim();
    }
  });

  return objectProp;
}

module.exports = convertToObject;
