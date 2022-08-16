'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  let sourceArrayCleaned = [];

  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i].trim().length !== 0) {
      sourceArrayCleaned.push(sourceArray[i].replace(/\s\s+/g, ' '));
    }
  }

  sourceArrayCleaned = sourceArrayCleaned.map(el => {
    return el.split(':').map(str => str.trim());
  });

  const sourceObject = Object.fromEntries(sourceArrayCleaned);

  return sourceObject;
}

module.exports = convertToObject;
