'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const source = sourceString;
  const string = source.split(';').filter((item) => item.trim() !== '');
  const declarat = [];

  string.forEach((item) => declarat.push(item.split(':')));

  const arrayCorrected = declarat.map((item) => item.map((el) => el.trim()));

  const styleObject = Object.fromEntries(arrayCorrected);

  return styleObject;
}

module.exports = convertToObject;
