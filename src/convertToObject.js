'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const object = {};
  const filtred = sourceString.replace(/[\s]+/g, ' ')
    .split(';')
    .filter(item => item !== ' ');

  filtred.forEach(item => {
    const temp = item.split(':');
    object[temp[0].trim()] = temp[1].trim();
  });

  return object;
}

module.exports = convertToObject;
