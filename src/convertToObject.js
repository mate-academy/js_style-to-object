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
  const arrCss = sourceString.split(';');

  function callback(prev, item) {
    const arrProperty = item.split(':');

    if (arrProperty[1]) {
      prev[arrProperty[0].trim()] = arrProperty[1].trim();
    }

    return prev;
  }

  return arrCss.reduce(callback, {});
}

module.exports = convertToObject;
