'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with
 * styles (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 *  CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const splitString = sourceString.split(';');
  const obj = {};

  splitString.forEach(style => {
    const item = style.split(':');

    if (item.length === 2) {
      obj[item[0].trim()] = item[1].trim();
    };
  });

  return obj;
}

convertToObject(`background-color:      #fff;
  -webkit-border-radius: 5px;
    border-radius     : 5px;
    border: 1px solid #e8e8e8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    clear   : both       ;
    cursor: pointer;`);

module.exports = convertToObject;
