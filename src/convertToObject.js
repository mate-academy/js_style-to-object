'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example in
 * [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties (see an exampl
 * in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString.split(';\n')
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .map(item => item.split(':').map(subitem => subitem.trim()))
    .reduce((resultObj, item) => {
      const itemAsObject = {};

      itemAsObject[item[0]] = item[1];

      return {
        ...resultObj,
        ...itemAsObject,
      };
    }, {});
}

module.exports = convertToObject;
