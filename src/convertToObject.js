'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const interimArray = sourceString
    .split(';')

    .map((el) => el.trim())

    .filter((el) => el !== '');

  const finalObject = {};

  const call = (string) => {
    finalObject[string.split(':')[0].trim()] = string.split(':')[1].trim();
  };

  interimArray.forEach(call);

  return finalObject;
}

module.exports = convertToObject;
