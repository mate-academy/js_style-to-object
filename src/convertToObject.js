'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convert = sourceString.split(';')
    .map(removeEdgeGaps => removeEdgeGaps.trim())
    .filter(removeSingleChar => removeSingleChar.length > 1)
    .map(removeMultiSpaces => removeMultiSpaces.replace(/\s\s+/g, ''))
    .map(separateWord => separateWord.split(':')
      .map(removeEdgeGaps => removeEdgeGaps.trim()));

  return Object.fromEntries(convert);
}

module.exports = convertToObject;
