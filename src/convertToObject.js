'use strict';
/**
 * @param {string} sourceString
 *
 * @return {object}
 */


function convertToObject(sourceString) {
  const keyValuePairs = sourceString
    .split(';')
    .map((item) =>
      item
        .split(':')
        .map((part) => part.trim())
    )
    .filter(([key]) => key);

    
   const objectFromPairs = Object.fromEntries(keyValuePairs);

  return objectFromPairs;
}
module.exports = convertToObject;
