'use strict';

function convertToObject(sourceString) {
  const sourceArray = sourceString.split(';');
  const clearArray = sourceArray
    .map(item => item.trim())
    .filter(item => item !== '\n' && item !== '')
    .map(item => item.split(':').map(el => el.trim()));

  return Object.fromEntries(clearArray);
}

module.exports = convertToObject;
