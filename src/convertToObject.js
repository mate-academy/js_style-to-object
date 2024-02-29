'use strict';

function convertToObject(sourceString) {
  const result = {};
  const sourceStringArray = sourceString
    .split(';')
    .map((item) => item.split(':'));

  for (const item of sourceStringArray) {
    const [key, value] = item;

    if (value) {
      result[key.trim()] = value.trim();
    }
  }

  return result;
}

module.exports = convertToObject;
