'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString
    .split(';')
    .filter((declaration) => declaration.trim())
    .reduce((object, declaration) => {
      const [key, ...valueParts] = declaration.split(':');

      object[key.trim()] = valueParts.join(':').trim();

      return object;
    }, {});

  return stylesObject;
}

module.exports = convertToObject;
