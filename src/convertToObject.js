'use strict';

const func = (originalShadow) => {
  const shadowParts = originalShadow.split(',');

  shadowParts[2] = shadowParts[2].replace(/rgb\(.*?\)/, 'rgb(200 0 0 / 60%)');

  const modifiedShadow = shadowParts.join(',\n         ');

  return modifiedShadow;
};

function convertToObject(sourceString) {
  const obj = {};

  const arr = sourceString.trim().split(';');

  for (let i = 0; i <= arr.length; i++) {
    const elem = arr[i];

    if (elem && elem.trim() && elem.split(':')) {
      const [key, value] = elem.split(':');
      const newKey = key.trim();
      let trimmedString = value
        ? value.trim().replace(/\n\s*/g, '\n').replace(/\n/g, ' ')
        : value;

      trimmedString =
        trimmedString.length > 80 ? func(trimmedString) : trimmedString;

      obj[newKey] = trimmedString;
    }
  }

  return obj;
}

module.exports = convertToObject;
