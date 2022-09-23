'use strict';

function convertToObject(sourceString) {
  let strings = sourceString.split(';');
  const obj = {};

  strings.map(str => {
    strings = str.trim().split(':');

    if (strings[0] && strings[1]) {
      obj[strings[0].trim()] = strings[1].trim();
    }
  });

  return obj;
}

module.exports = convertToObject;
