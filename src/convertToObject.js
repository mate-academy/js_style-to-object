'use strict';

function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';');

  for (const item of parts) {
    const colonIndex = item.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    let key = item.slice(0, colonIndex);
    let value = item.slice(colonIndex + 1);

    key = key.replace(/^\s+|\s+$/g, '');
    value = value.replace(/^\s+|\s+$/g, '');

    if (key && value) {
      result[key] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
