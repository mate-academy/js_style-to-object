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
  const filtered
    = sourceString.split(';')
      .map(item => item
        .split(':')
        .map(i => i.trim()));

  const cssObject = filtered.reduce((previous, element) => {
    if (element.length > 1) {
      previous[element[0]] = element[1];
    }

    return previous;
  }, {});

  return cssObject;
}

module.exports = convertToObject;
