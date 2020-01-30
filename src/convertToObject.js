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
  const correctStringFormat = sourceString.replace(/\s{2,}/g, '')
    .replace(/;+/g, ';')
    .replace(/\n/, '')
    .split(';');

  correctStringFormat.splice(-1);

  const convertedObj = {};

  correctStringFormat.forEach((item) => {
    const splitItem = item.split(/:\s?/);

    convertedObj[splitItem[0]] = splitItem[1];
  });

  return convertedObj;
}

module.exports = convertToObject;
