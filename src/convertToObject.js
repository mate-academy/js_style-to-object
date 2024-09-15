'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString === '') {
    return {};
  };

  const arrString = sourceString.split(';');
  const arrKeyValue = arrString.map(item => item.split(':').map(part => part.trim()));
  const object = {};

  arrKeyValue.forEach(([key, value]) => {
    object[key] = value;
  });

  return object;
}

module.exports = convertToObject;
