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
  const styleObject = {};
  const arrNew = sourceString.replace(/\n/g, '').split(';');

  arrNew.pop();

  arrNew.forEach(el => {
    if (el !== '') {
      const arrNewElement = el.split(':');

      if (arrNewElement.length > 1) {
        styleObject[arrNewElement[0].trim()] = arrNewElement[1].trim();
      }
    }
  });

  return styleObject;
}

module.exports = convertToObject;
