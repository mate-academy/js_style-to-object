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
  const convertedToArray = sourceString
    .split(';').map(
      string => string.trim().split(':').map(
        key => key.trim()
      )
    );

  return Object.fromEntries(
    convertedToArray.filter(
      array => array.every(key => key.length !== 0)
    )
  );
}

module.exports = convertToObject;
