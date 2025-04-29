'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const rules = stylesString
    .replace(/\s*;\s*/g, ';')
    .replace(/\t/g, '')
    .split(';')
    .map(rule => rule.trim())
    .filter(Boolean);
  
  const stylesObject = {};

  rules.forEach(rule => {
    const [property, ...valueParts] = rule.split(':');
    const value = valueParts.join(':').trim();
    const cleanProperty = property.trim();
    const cleanValue = value.replace(/\n/g, '');
    const valueWithImportant = cleanValue.includes('!important')
      ? cleanValue
      : cleanValue.trim();

    stylesObject[cleanProperty] = valueWithImportant;
  });

  return stylesObject;
}

module.exports = convertToObject;
