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
  const cssArray = sourceString.split(';').map(element => element.split(':'));

  return cssArray.reduce((previous, current) => {
    if (current.length > 1) {
      return {
        ...previous,
        [current[0].trim()]: current[1].trim(),
      };
    }

    return { ...previous };
  }, {});
}

module.exports = convertToObject;
