'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const declarations = sourceString.matchAll(/([^:;]+):([^;]+)/g);

  [...declarations].forEach(([, key, value]) => {
    styleObject[key.trim()] = value.trim();
  });

  return styleObject;
}

module.exports = convertToObject;
