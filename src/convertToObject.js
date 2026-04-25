'use strict';

function convertToObject(stylesString) {
  const result = {};

  stylesString.split(';').forEach((rule) => {
    const trimmed = rule.trim();

    if (!trimmed) {
      return;
    }

    const parts = trimmed.split(':');

    if (parts.length < 2) {
      return;
    }

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (property && value) {
      result[property] = value;
    }
  });

  return result;
}

module.exports = convertToObject;
