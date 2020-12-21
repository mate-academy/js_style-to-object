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
  let stringCSS = sourceString.split(';');
  const result = {};

  stringCSS = stringCSS.map(x => x.replace(/\n|\s\s+/g, ''));
  stringCSS = stringCSS.filter(x => x.length > 1);

  stringCSS.forEach(el => {
    const [rule, value] = el.split(':');

    result[rule] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
