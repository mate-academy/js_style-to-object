'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const strSplited = sourceString.split(';');
  const resault = {};

  strSplited.forEach((element) => {
    const [param, value] = element.split(':');

    if (param !== '' && value !== undefined) {
      resault[param.trim()] = value.trim();
    }
  });

  return resault;
}

module.exports = convertToObject;
