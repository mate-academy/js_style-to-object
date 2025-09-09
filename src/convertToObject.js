'use strict';

function convertToObject(styles) {
  const result = {};

  if (typeof styles !== 'string' || styles.trim() === '') {
    return result;
  }

  const DECLARATION_REGEX = /(^|;)\s*([-\w]+)\s*:\s*([^;]*?)(?=;|$)/g;

  let match;

  while ((match = DECLARATION_REGEX.exec(styles)) !== null) {
    const prop = match[2].trim();
    const value = match[3].replace(/^[\s\r\n\t]+|[\s\r\n\t]+$/g, '');

    if (prop && value !== '') {
      result[prop] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
