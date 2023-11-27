'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
  function convertToObject(sourceString) {
    const array = sourceString.replace(/[\r\n]/gm, '').split(/[;:]+/);
    const object = {};
    const trim = array.map(x => x.trim(' '));
  
    for (let i = 0; i < trim.length - 1; i=i+2) {
      if (trim[i].length === 0) {
        continue;
      }
      object[trim[i]]= trim[i + 1];
    }
  
    return object;
  }


module.exports = convertToObject;
