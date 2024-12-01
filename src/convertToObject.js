'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splittedSourceString = sourceString.split(';');

  return splittedSourceString.reduce((acc, el) => {
    const [key, values] = el.split(':');

    return key && values
      ? {
        ...acc,
        [key.trim()]: values.trim(),
      }
      : { ...acc };
  }, {});
}

module.exports = convertToObject;
