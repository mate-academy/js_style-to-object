'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const declaration = sourceString
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean);

  declaration.forEach((decl) => {
    const [key, ...rest] = decl.split(':');

    if (!key || rest.length === 0) {
      return;
    }

    const value = rest.join(':');
    const cleanKey = key.trim();
    const cleanValue = value.trim();

    result[cleanKey] = cleanValue;
  });

  return result;
}

module.exports = convertToObject;
