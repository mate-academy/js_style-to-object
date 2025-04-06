'use strict';

function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';').filter(Boolean);

  properties.forEach((prop) => {
    const [key, value] = prop.split(':');

    if (!key || !value) {
      return;
    }

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
