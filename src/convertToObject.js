'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles (see an example
 * in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS properties
 * (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';')
    .map(el => el.trim())
    .filter(el => el);

  const declarationBlock = declarations.reduce((accum, declaration) => {
    const [key, value] = declaration.split(':').map(el => el.trim());

    accum[key] = value;

    return accum;
  }, {});

  return declarationBlock;
}

module.exports = convertToObject;
