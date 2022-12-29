'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const linesFilteredArray = sourceString
    .split(';')
    .filter(line => line.includes(':'));

  const charsFilteredArray = linesFilteredArray.map(
    line => line
      .split('')
      .filter(char => char !== '\n')
      .join(''));

  const reduceToObjectCallback = (acc, line) => {
    const index = line.indexOf(':');
    const property = line
      .slice(0, index)
      .trim();
    const value = line
      .slice(index + 1)
      .trim();

    return {
      ...acc,
      [property]: value,
    };
  };

  return charsFilteredArray.reduce(reduceToObjectCallback, {});
}

module.exports = convertToObject;
