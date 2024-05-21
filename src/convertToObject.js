'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const objectOfStyle = {};

  if (sourceString.trim() === '') {
    return {};
  }

  const arrFromString = sourceString.trim().split(';');

  const getKeyandProp = arrFromString.map((item) => {
    const [key, prop] = item.split(':').map((part) => part.trim());

    return { key, prop };
  });

  getKeyandProp.forEach(({ key, prop }) => {
    if (key !== '') {
      objectOfStyle[key] = prop;
    }
  });

  return objectOfStyle;
}

module.exports = convertToObject;
