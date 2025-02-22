'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const interArr = sourceString.split(';');

  const arr = interArr
    .filter((item) => item.trim().length > 0)
    .map((item) => item.trim().replace(/\s*:\s*/g, ':'));

  const finalObj = arr.reduce((accumulator, item) => {
    const [key, value] = item.split(':');

    accumulator[key] = value;

    return accumulator;
  }, {});

  return finalObj;
}

module.exports = convertToObject;
