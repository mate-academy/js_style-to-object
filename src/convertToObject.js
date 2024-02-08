'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const styles = {};

  const strings = sourceString.split('\n').map((value) => {
    const rightString = value.trim(' ');

    return rightString;
  }).filter(x => x.length > 2);

  for (let i = 0; i < strings.length; i++) {
    const style = strings[i].split(':');

    styles[style[0].trim(' ')] = style[1].replace(';', '').trim(' ');
  }

  return styles;
}

module.exports = convertToObject;
