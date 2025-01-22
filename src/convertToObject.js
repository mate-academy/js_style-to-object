'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const toArr = sourceString
    .replace(/\n/g, ' ')
    .trim()
    .split('; ')
    .map((el) => el.trim());
  const clineArr = toArr.filter((element) => element.length > 1);
  const result = {};

  clineArr.forEach((rules) => {
    const rulesToArr = rules.split(': ');
    const [key, value] = rulesToArr;
    let trimmedKey = key.trim();
    let trimmedValue = value;

    if (trimmedKey.split('').shift() === ';') {
      trimmedKey = key.slice(1);
    }

    if (value.split('').pop() === ';') {
      trimmedValue = value.slice(0, -1);
    }

    result[trimmedKey] = myTrim(trimmedValue, ',', ',\n          ');
  });

  return result;
}

function myTrim(string, getSymbol, setSymbol) {
  const toArr = string.split(getSymbol);
  const result = [];

  for (let i = 0; i < toArr.length; i++) {
    result.push(toArr[i].trim());
  }

  return result.join(setSymbol);
}

module.exports = convertToObject;
