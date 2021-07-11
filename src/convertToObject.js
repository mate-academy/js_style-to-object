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
  const styleObj = {};

  sourceString.split(';').map((e) => {
    const el = e.split(':');

    if (el.length === 2) {
      styleObj[el[0].trim()] = el[1].trim();
    };
  });

  return styleObj;
}

module.exports = convertToObject;
