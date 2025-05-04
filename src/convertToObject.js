'use strict';

/**
 * @param {string} sourceString
 * @return {object}
 */
function convertToObject(stylesString) {
  const stylesObject = {};
  const regex = /([\w-]+)\s*:\s*([^;]+)\s*(;|$)/g;
  let match;

  while ((match = regex.exec(stylesString)) !== null) {
    const property = match[1].trim();
    let value = match[2];

    value = value.replace(/[\r\t]+/g, '');
    value = value.trim(); 

    stylesObject[property] = value;
  }

  return stylesObject;
}

module.exports = convertToObject;
