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
  const sccObj = {};
  const sourceArr = sourceString.split(';');

  sourceArr.pop();

  sourceArr.forEach(el => {
    const properties = el.split(':');

    if (properties[1]) {
      sccObj[properties[0].trim()] = properties[1].trim();
    }
  });

  return sccObj;
}

module.exports = convertToObject;
