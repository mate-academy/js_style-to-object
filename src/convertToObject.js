'use strict';

function convertToObject(sourceString) {
  const convertedObject = {};

  const stringStyle = sourceString
    .split(';')
    .map(prop =>
      prop
        .split(':')
        .map(item => item.trim())
    );

  stringStyle.forEach(item => {
    const [key, value] = item;

    if (value) {
      convertedObject[key] = value;
    }
  });

  return convertedObject;
}

module.exports = convertToObject;
