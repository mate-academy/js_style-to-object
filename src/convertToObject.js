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
  const cssPairs = sourceString.split('\n').join('').split(';');
  // morfing cssPairs string by removing \n
  // and splitting it by ';' to key/value strings
  const cssParams = {}; // our resulting object

  for (let item of cssPairs) {
    item = item.split(':'); // spliting to key/value pairs
    item[0] = item[0].trim();

    if (item[0].length === 0) { // check if key is invalid
      continue; // meaning pair will be invalid as well
    }
    item[1] = item[1].trim(); // if pair valid triming value
    cssParams[item[0]] = item[1]; // assigning key/value to object
  }

  return cssParams;
}

module.exports = convertToObject;
