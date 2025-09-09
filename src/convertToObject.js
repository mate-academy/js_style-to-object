'use strict';

function convertToObject(styles) {
  const stylesMap = {};

  if (typeof styles !== 'string' || styles.trim() === '') {
    return stylesMap;
  }

  const DECLARATION_REGEX = /(^|;)\s*([-\w]+)\s*:\s*([^;]*?)(?=;|$)/g;

  let match;

  while ((match = DECLARATION_REGEX.exec(styles)) !== null) {
    const property = match[2].trim();
    const value = match[3].replace(/^[\s\r\n\t]+|[\s\r\n\t]+$/g, '');

    if (property && value !== '') {
      stylesMap[property] = value;
    }
  }

  return stylesMap;
}

module.exports = convertToObject;
