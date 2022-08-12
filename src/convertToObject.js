'use strict';

function convertToObject(sourceString) {
  const entriesArray = sourceString
    .split(';').map((a) => a.split(':')
      .map((b) => b.trim())).filter((c) => c.length === 2);

  const result = {};

  for (let i = 0; i < entriesArray.length; i++) {
    result[entriesArray[i][0]] = entriesArray[i][1];
  }

  return result;
}

module.exports = convertToObject;
