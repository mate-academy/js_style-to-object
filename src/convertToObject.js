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
  const convertedSourseString = {};
  const preEntries = sourceString.split(';');
  const entries = preEntries.map(a => a.split(`:`));
  const entriesWithoutSpace = entries.map(a => a.map(b => b.trim()));

  for (let i = 0; i < entriesWithoutSpace.length; i++) {
    if (entriesWithoutSpace[i][1] === undefined) {
      i++;
    } else {
      convertedSourseString[entriesWithoutSpace[i][0]]
        = entriesWithoutSpace[i][1];
    }
  }

  return convertedSourseString;
}

module.exports = convertToObject;
