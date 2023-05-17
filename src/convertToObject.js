'use strict';
/*
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const cssStyleObject = {};

  const stringArr = sourceString
    .split(';')
    .map(style => style.trim())
    .filter(style => style);

  stringArr.forEach(style => {
    const styleArr = style.split(':');
    const key = styleArr[0].trim();
    const value = styleArr[1].trim();

    cssStyleObject[key] = value;
  });

  return cssStyleObject;
}

module.exports = convertToObject;
