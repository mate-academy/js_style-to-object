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
  const properties = sourceString
    .split(';')
    .map(pairStyle => pairStyle.split(':'))
    .filter(pairStyle => pairStyle.length === 2);

  const callback = (object, pairStyle) => {
    return {
      ...object,
      [pairStyle[0].trim()]: pairStyle[1].trim(),
    };
  };

  const cssProperties = properties.reduce(callback, {});

  return cssProperties;
}

module.exports = convertToObject;
