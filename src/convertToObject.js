'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString
    .split(';')
    .map(property => property.split(':'))
    .filter(property => property.length > 1)
    .map(property => ([property[0].trim(), property[1].trim()]));

  const callback = (prev, current) => {
    return {
      ...prev,
      [current[0]]: current[1],
    };
  };

  return splitted.reduce(callback, {});
}

module.exports = convertToObject;
