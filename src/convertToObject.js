'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const convertedObject = {};

  sourceString
    .split(';')
    .map(item => item.trim())
    .filter(item => item !== '')
    .map(element => element.split(':').map(item => item.trim()))
    .forEach(item => (convertedObject[item[0]] = item[1]));

  return convertedObject;
}

module.exports = convertToObject;
