'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssDivided1 = sourceString.split(';');
  const cssDivided2 = cssDivided1.map((item) =>
    item.split(':').map((part) => part.trim()),
  );

  const obj = cssDivided2.reduce((prev, [key, value]) => {
    prev[key] = value;

    return prev;
  }, {});

  return obj;
}

module.exports = convertToObject;
