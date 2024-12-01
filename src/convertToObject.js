'use strict';

/**
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
