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
  const cascadingStyleSheets = {};
  const stringConvertedToArray = sourceString.split(';');
  const splittedArray = stringConvertedToArray.map(style => style.split(':'));
  const deletedGaps = splittedArray.map(
    pair => pair.map(element => element.trim())
  );
  const filteredArray = deletedGaps.filter(style => style.length === 2);

  for (const style of filteredArray) {
    cascadingStyleSheets[style[0]] = style[1];
  }

  return cascadingStyleSheets;
}

module.exports = convertToObject;
