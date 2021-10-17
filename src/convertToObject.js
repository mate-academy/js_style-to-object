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
  const splittedSourceString = sourceString.split(';');

  return splittedSourceString.reduce((acc, el) => {
    const [key, values] = el.trim().split(':');

    return key && values
      ? {
        ...acc,
        [key.trim()]: values.trim(),
      }
      : { ...acc };
  }, {});
}

module.exports = convertToObject;
