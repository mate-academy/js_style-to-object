'use strict';

// const source = require('./stylesString');

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .replace(/(\r\n|\n|\r)/gm, '')
    .replace(/\s{2,}/g, ' ')
    .split(';')
    .map(item => item.trim().replace(/\s:/g, ':'))
    .filter(item => item)
    .reduce((storage, current) => {
      const splittedArray = current.split(': ');
      const [key, value] = splittedArray;

      storage[key] = value;

      return storage;
    }, {});
}

module.exports = convertToObject;
