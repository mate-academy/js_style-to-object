'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};
  let styleArr = [];
  let key = '';
  let value = '';

  // styleArr = sourceString.split('\n').join('').split(';');
  styleArr = sourceString.split(';');

  styleArr.map((item) => {
    if (item.trim() !== '') {
      key = item.split(':')[0];
      value = item.split(':')[1];
      cssObject[key.trim()] = value.trim();
    }
  });

  return cssObject;
}

module.exports = convertToObject;
