'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyleObject = {};

  sourceString
    .split(';')
    .filter(value => value.trim())
    .map(value => value.split(':'))
    .forEach(value => (
      cssStyleObject[value[0].trim()] = value[1].trim()));

  return cssStyleObject;
}

module.exports = convertToObject;
