'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const strSplited = sourceString.split(';');
  const objectWithStyles = {};

  strSplited.forEach((element) => {
    const [param, value] = element.split(':');

    if (param && value) {
      objectWithStyles[param.trim()] = value.trim();
    }
  });

  return objectWithStyles;
}

module.exports = convertToObject;
