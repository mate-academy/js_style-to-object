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
  const draftArrOfProperties = sourceString.replace(/\n/g, '').split(';');

  const ArrOfProperties = draftArrOfProperties
    .filter(elmnt => elmnt !== ' ' && elmnt !== '' && elmnt !== '  ')
    .map(elmnt => {
      const cell = elmnt
        .split(':')
        .map(x => x.trim());

      return cell;
    });

  const result = Object.fromEntries(ArrOfProperties);

  return result;
}

module.exports = convertToObject;
