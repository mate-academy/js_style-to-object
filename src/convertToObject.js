'use strict';

//  * @param {string} sourceString
//  *
//  * @return {object}
//  */
function convertToObject(sourceString) {
  const obj = {};
  const array = sourceString.split(';');

  array.map(item => {
    const [ key, value ] = item.split(':');

    if (key && value) {
      obj[key.trim()] = value.trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
