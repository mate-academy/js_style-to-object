'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  let styleArr = [];
  let key = '';
  let value = '';

  styleArr = sourceString.split(';');

  styleArr.forEach((item) => {
    if (item.trim() !== '') {
      key = item.split(':')[0];
      value = item.split(':')[1];
      result[key.trim()] = value.trim();
    }
  });

  return result;
}

module.exports = convertToObject;
