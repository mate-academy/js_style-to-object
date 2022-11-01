'use strict';

/**
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(str => str.trim())
    .filter(str => str.length > 0)
    .map(style => style.split(':')
      .map(word => word.trim()))
    .reduce(createObj, {});
}

const createObj = (prev, current) => {
  return {
    ...prev, [current[0]]: current[1],
  };
};

module.exports = convertToObject;
