'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const declarations = sourceString.split(';').filter(Boolean);

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((str) => str.trim());

    if (property && value) {
      obj[property] = value;
    }
  });

  return obj;
}

module.exports = convertToObject;
