'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString
    .split(';')
    .map((item) => item.split(':'))
    .filter((item) => item.length === 2);

  const formatedObject = {};

  properties.map((item) => {
    const propKey = item[0].trim();
    const propValue = item[1].trim();

    formatedObject[propKey] = propValue;
  });

  return formatedObject;
}

module.exports = convertToObject;
