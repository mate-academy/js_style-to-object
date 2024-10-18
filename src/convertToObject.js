'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sourceArr = sourceString
    .split(';')
    .map((element) => element.trim())
    .filter((element) => element !== '');

  const diferentArr = sourceArr.map((style) => style.split(':'));
  const result = {};

  if (!sourceString) {
    return {};
  }

  diferentArr.map((value) => {
    result[value[0].trim()] = value[1].trim();
  });

  return result;
}

module.exports = convertToObject;
