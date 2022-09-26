'use strict';

function convertToObject(sourceString) {
  let strings = sourceString.split(';');
  const resultObj = {};

  strings.map(str => {
    strings = str.trim().split(':');

    if (strings[0] && strings[1]) {
      resultObj[strings[0].trim()] = strings[1].trim();
    }
  });

  return resultObj;
}

module.exports = convertToObject;
