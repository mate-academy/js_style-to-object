'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function myTrim(string, getSymbol, setSymbol) {
  const toArr = string.split(getSymbol);
  const result = [];

  for (let i = 0; i < toArr.length; i++) {
    result.push(toArr[i].trim());
  }

  return result.join(setSymbol);
}

function convertToObject(sourceString) {
  const toArr = sourceString.replace(/\n/g, ' ').trim().split('; ');
  const clineArr = toArr.filter((element) => element.length > 1);
  const result = {};

  clineArr.forEach((rules) => {
    const rulesToArr = rules.split(': ');
    const [key, value] = rulesToArr;
    let trimmedKey = key.trim();
    let trimmedValue = value;

    if (trimmedKey.split('').shift() === ';') {
      trimmedKey = key.slice(1).trim();
    }

    if (value.split('').pop() === ';') {
      trimmedValue = value.slice(0, -1).trim();
    }

    result[trimmedKey] = myTrim(trimmedValue, ',', ',\n\t ');;
  });

  return result;
}

module.exports = convertToObject;
