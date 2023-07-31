'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 *  (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 *  (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const formattedString = sourceString;
  // .replace(/(?:\r\n|\r|\n)/g, '') // del new line
  // .replace(/ +/g, ' ') // del extra sp.
  // .replace(/ *: */g, ':') // del sp. after and before :
  // .replace(/ *; */g, ';') // -||- ;
  // .trim(); // del sp. on the beginning and end

  const splitted = formattedString.split(';');
  const objCss = {};

  splitted.forEach(item => {
    const keyValue = item.split(':');

    // dividing pair on two
    if (keyValue.length === 2) {
      const key = keyValue[0].trim();
      const value = keyValue[1].trim();

      //  if not empty lets use it
      if (key.length > 0 && value.length > 0) {
        objCss[key] = value;
      }
    }
  });

  return objCss;
}

module.exports = convertToObject;
