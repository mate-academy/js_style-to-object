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
  const arr = sourceString.split(';');
  const obj = {};

  arr.forEach(elem => {
    const prop = elem.split(':').map(e => e.trim());

    obj[prop[0]] = prop[1];
  });

  delete obj[''];

  return obj;
}

module.exports = convertToObject;
