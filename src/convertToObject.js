'use strict';

function convertToObject(sourceString) {
  const obj = {};

  const arr = sourceString.trim().split(';');

  for (const elem of arr) {
    const newElem = elem.split(':');

    if (elem && elem.trim() && newElem) {
      const [key, value] = newElem;

      obj[key.trim()] = value.trim();
    }
  }

  return obj;
}

module.exports = convertToObject;
