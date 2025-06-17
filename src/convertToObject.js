'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const lines = sourceString.split('/n');

  for (let line of lines) {
    line = line.trim();

    if (!line || !line.includes(':')) {
      continue;
    }

    const colonIndex = line.lastIndexOf(':');
    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }
    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
