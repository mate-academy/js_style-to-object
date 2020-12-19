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
  const propObject = {};
  const propArr = sourceString
    .replace(/\n|\s\s+/g, '')
    .split(';')
    .filter(prop => prop.length !== 0);

  for (let i = 0; i < propArr.length; i++) {
    const [prop, value] = propArr[i].split(':');

    propObject[prop] = value.trim();
  }

  return propObject;
}

module.exports = convertToObject;
