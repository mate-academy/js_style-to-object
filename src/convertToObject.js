'use strict';

/**
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
