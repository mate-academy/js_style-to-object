'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const arr = sourceString.trim().split(';');

  for (let i = 0; i <= arr.length; i++) {
    const elem = arr[i];

    if (elem && elem.trim() && elem.split(':')) {
      const [key, value] = elem.split(':');

      obj[key.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
