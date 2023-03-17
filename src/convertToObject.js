'use strict';

function convertToObject(sourceString) {
  const cssObject = {};

  sourceString.split(';').forEach(index => {
    if (index.trim() !== '') {
      const pair = index.split(':');

      cssObject[pair[0].trim()] = pair[1].trim();
    }
  });

  return cssObject;
}

module.exports = convertToObject;
