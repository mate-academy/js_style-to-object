'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = {};
  const cleanedString = sourceString
    .replace(/\s*;\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .replace(/;\s*$/, '')
    .trim();
  const rules = cleanedString.split(';');

  for (const rule of rules) {
    const [key, ...valueParts] = rule.split(':');
    const value = valueParts.join(':');

    if (key && value) {
      stylesObject[key.trim()] = value.trim();
    }
  }

  return stylesObject;
}

module.exports = convertToObject;
