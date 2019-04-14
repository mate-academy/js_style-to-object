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
