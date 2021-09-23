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
  const normilisedWhitespaces = sourceString.replace(/\n/g, '');
  const stringSliced = normilisedWhitespaces.split(';');
  const arrWithoutEmpty = stringSliced
    .filter(elmnt => elmnt !== ' ' && elmnt !== '' && elmnt !== '  ');
  const arrOfKeyAndValues = arrWithoutEmpty.map(elmnt => {
    const cell = elmnt.split(':').map(x => x.trim());

    return cell;
  });

  const result = Object.fromEntries(arrOfKeyAndValues);

  return result;
}

module.exports = convertToObject;
