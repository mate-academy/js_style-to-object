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
  const objectCss = {};
  let sourceStringSplit = sourceString.split(';');

  sourceStringSplit = sourceStringSplit.map((element) => {
    return element.trim();
  });

  sourceStringSplit = sourceStringSplit.filter((element) => {
    if (element !== '') {
      return element.trim();
    }
  });

  for (let i = 0; i < sourceStringSplit.length; i++) {
    const newsourceString = sourceStringSplit[i].split(': ');

    objectCss[newsourceString[0].trim()] = newsourceString[1].trim();
  }

  return objectCss;
}

module.exports = convertToObject;
