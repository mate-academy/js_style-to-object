'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesArray = sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item)
    .map((item) => item.split(':').map((styleEntry) => styleEntry.trim()));

  return stylesArray.reduce((stylesObject, styleEntry) => ({ ...stylesObject, [styleEntry[0]]: styleEntry[1] }), {});
}

module.exports = convertToObject;
