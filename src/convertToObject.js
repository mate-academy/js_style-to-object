'use strict';

/**

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssStyleObject = {};

  const string = sourceString
    .split(';')
    .filter(value => value.trim())
    .map(value => value.split(':'));

  for (const element of string) {
    cssStyleObject[element[0].trim()] = element[1].trim();
  }

  return cssStyleObject;
}

module.exports = convertToObject;
