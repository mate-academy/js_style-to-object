'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const splitString = sourceString.split(';');

  const convertString = splitString.reduce((previous, elem) => {
    let property = '';
    let value = '';
    const splitRule = elem.split(':');

    if (splitRule.length < 2) {
      return previous;
    }

    property = splitRule[0].trim();
    value = splitRule[1].trim();

    previous[property] = value;

    return previous;
  }, {});

  return convertString;
}

module.exports = convertToObject;
