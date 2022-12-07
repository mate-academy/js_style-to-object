'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related
 * CSS properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const property = {};
  const propertyList = sourceString
    .split(';')
    .filter(item => item.includes(':'))
    .map(el => el.split(':'));
    // Alternative way: 1) .forEach(([key, value]) =>{
    //  property[key.trim()] = valu.trim();
    // });
    // 2) .reduce((obj, [key , value]) => {
    //  obj[key.trim()] = value.trim();
    //  return obj;
    // }; {});

  for (const ch of propertyList) {
    property[ch[0].trim()] = ch[1].trim();
  }

  return property;
}

module.exports = convertToObject;
