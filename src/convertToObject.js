'use strict';

function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';').map((e) => e.trim());
  const delet = parts.filter((e) => e !== '');

  delet.forEach((e) => {
    const [key, value] = e.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
