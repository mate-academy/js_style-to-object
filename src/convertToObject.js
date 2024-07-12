/* eslint-disable prettier/prettier */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .filter((style) => style.includes(':'))
    .reduce((stylesObject, style) => {
      const [property, value] = style.split(':').map((el) => el.trim());

      if (property !== '' && value !== '') {
        stylesObject[property] = value;
      }

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
