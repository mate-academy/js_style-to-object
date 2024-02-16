'use strict';

function convertToObject(sourceString) {
  const temper = sourceString.split('\n').slice(1);
  const result = {};

  for (const ch of temper) {
    if (ch !== '' && ch !== '  ;') {
      result[ch.split(':')[0].trim()] = ch.split(':')[1].slice(0, -1).trim();
    }
  }

  return result;
}

module.exports = convertToObject;
