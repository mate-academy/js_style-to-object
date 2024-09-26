'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let objAll = sourceString.split(';');
  let keyValue = {};
  console.log(objAll);
  objAll.forEach(function(item) {
    let [key, value] = item.split(':');
    if (key && value) {
      keyValue[key.trim()] = value.trim();
    }
  });
  return keyValue;
}

module.exports = convertToObject;
