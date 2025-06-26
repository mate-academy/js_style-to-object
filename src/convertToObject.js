'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleString) {
  // write your code here
  const styleStringSplited = styleString.split(';');

  styleStringSplited.forEach((item, index) => {
    styleStringSplited[index] = item.trim();
  })


  styleStringSplited.forEach((item, index) => {
    if (item === '') {
      delete styleStringSplited[index];
      return;
    }
    styleStringSplited[index] = item.split(':');
  })

  const object = {};

  styleStringSplited.forEach((role) => {
    if (role === undefined) {
      return;
    }

    object[role[0].trim()] = role[1].trim();
  })

  return object;

}


module.exports = convertToObject;
