'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objWithProps = {};
  const emptyStrException = /[^\s*$]/;
  const arrDevidedBySemicolon = sourceString.split(';');
  const result = arrDevidedBySemicolon.filter(elem => {
    return emptyStrException.test(elem);
  });
  const valuePropArray = result.map(elem => {
    return elem.split(':');
  });

  for (const property of valuePropArray) {
    property[0] = property[0].trim();
    property[1] = property[1].trim();
  }

  for (const val of valuePropArray) {
    objWithProps[val[0]] = val[1];
  }

  return objWithProps;
}

module.exports = convertToObject;
