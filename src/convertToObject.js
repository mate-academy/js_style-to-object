'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const mass = sourceString.split(';');
  const result = mass.reduce((accumulator, a) => {
    const styleElem = a.split(':').map((e) => e.trim());

    return { ...accumulator, [styleElem[0]]: styleElem[1] };
  }, {});

  return result;
}

module.exports = convertToObject;
