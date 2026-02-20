'use strict';

function convertToObject(sourceString) {
  const result = {};

  const parts = sourceString.split(';');

  parts.forEach((part) => {
    const trimmed = part.trim();
    if (!trimmed) return;

    const [key, ...rest] = trimmed.split(':');
    if (!key || rest.length === 0) return;

    const cleanKey = key.trim();
    if (!cleanKey) return;

    const value = rest.join(':').trim();

    result[cleanKey] = value;
  });

  return result;
}

module.exports = convertToObject;

