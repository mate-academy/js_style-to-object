'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split('\n')
    .map(item => item.replace(/;/g, ''))
    .map(item => item.trim())
    .filter(item => item.length > 1)
    .map(item => item.replace(/\s+/g, ' '))
    .map(item => item.replace(/\s:/g, ':'))
    .map(item => item.split(': '));

  const result = {};

  arr.forEach(function(item) {
    result[`${item[0]}`] = `${item[1]}`;
  });

  return result;
}

module.exports = convertToObject;
