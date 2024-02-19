'use strict';

function convertToObject(sourceString) {
  const SPLIT_LINES_ARR = sourceString.split('\n');
  const RESULT = {};

  for (const line of SPLIT_LINES_ARR) {
    const PARTS = line.split(':');

    if (PARTS.length === 2) {
      const key = PARTS[0].trim();
      const value = PARTS[1].slice(0, -1).trim();

      RESULT[key] = value;
    }
  }

  return RESULT;
}

module.exports = convertToObject;
