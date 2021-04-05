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
  const a = sourceString.split('\n').join('').split(';');
  // morfing a string by removing \n
  // and splitting it by ';' to key/value strings
  const cssParams = {}; // our resulting object

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].split(':'); // spliting to key/value pairs
    a[i][0] = a[i][0].trim();

    if (a[i][0].length === 0) { // check if key is invalid
      continue; // meaning pair will be invalid as well
    }
    a[i][1] = a[i][1].trim(); // if pair valid triming value
    cssParams[a[i][0]] = a[i][1]; // assigning key/value to an object
  }

  return cssParams;
}

module.exports = convertToObject;
