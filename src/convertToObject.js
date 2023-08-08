'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrayString = sourceString.split(';');

  const styleArray = arrayString
    .map(style => style.trim());

  const stylesObject = styleArray.reduce((obj, v) => {
    const [key, value] = v.split(':');

    if (key !== undefined && value !== undefined
      && key !== '' && value !== '') {
      obj[key.trim()] = value.trim();
    }

    return obj;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
