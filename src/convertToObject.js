'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const delEmptyLine = sourceString.replace(/\n/g, '');

  const commandsArr = delEmptyLine.split(';');

  const commandsArrFinal = commandsArr.filter((str) => str.trim());

  const resultObject = {};

  for (let i = 0; i < commandsArrFinal.length; i++) {
    const commandArr = commandsArrFinal[i].split(':');

    const key = commandArr[0].trim();
    const value = commandArr[1].trim();

    resultObject[key] = value.replace(/,/g, ',\n');
  }

  if (sourceString === '') {
    return {};
  }

  return resultObject;
}

module.exports = convertToObject;
