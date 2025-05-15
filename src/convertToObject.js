'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleLines = sourceString.split(';');
  const filtredStyleLines = styleLines.filter((styleLine) => {
    return styleLine.trim() !== '' && styleLine.includes(':');
  });

  return filtredStyleLines.reduce((acc, line) => {
    const splitedLine = line.split(':');
    const key = splitedLine[0].trim();
    const value = splitedLine[1].trim();

    acc[key] = value;

    return acc;
  }, {});
}

module.exports = convertToObject;
