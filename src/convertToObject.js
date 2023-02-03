'use strict';

function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map(item => item.split(':'))
    .filter(pair => pair.length === 2)
    .reduce((prev, [key, value]) => ({
      ...prev,
      [key.trim()]: value.trim(),
    }), {});
}

module.exports = convertToObject;
