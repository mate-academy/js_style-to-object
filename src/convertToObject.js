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
  const separeteElements = sourceString.split(';')
    .map(item => item.split(':')
      .map(element => element.trim()))
    .filter(item => item.length > 1);

  const convertedObject = separeteElements.reduce((object, element) => ({
    ...object,
    [element[0]]: element[1],
  })
  , {});

  return convertedObject;
}

module.exports = convertToObject;
