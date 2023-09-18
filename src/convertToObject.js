'use strict';

function convertToObject(sourceString) {
  const result = {};

  const arrOfStr = sourceString.split(';');

  for (const str of arrOfStr) {
    const [key, value] = str
      .split(':')
      .map(el => el.trim());

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
