'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitedString = sourceString.split(';');
  let obj = {};

  const formatedString = splitedString.map((element) => {
    return element.trim().split(':');
  });

  formatedString.map((element) => {
    let property = '';
    let value = '';

    if (element[0] !== '' && element[1] !== '') {
      property = element[0].trim();
      value = element[1].trim();

      obj = { ...obj, [property]: `${value}` };
    }
  });

  return obj;
}

module.exports = convertToObject;
