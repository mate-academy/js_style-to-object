'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filterSrc
     = sourceString.split(';')
       .map(item => item.split('')
         .filter(i => i !== '\n' && i !== '')
         .join('')
         .split(':')
         .map(a => a.trim())
         .filter(b => b !== ''));

  const resultObject = filterSrc.reduce((previous, element) => {
    if (element.length > 1) {
      previous[element[0]] = element[1];
    }

    return previous;
  }, {});

  return resultObject;
}

module.exports = convertToObject;
