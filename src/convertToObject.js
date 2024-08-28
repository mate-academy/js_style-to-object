'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  const cleanStyles = sourceString
    .replace(/\s*;\s*/g, ';')
    .replace(/^\s*;\s*|\s*;\s*$/g, '')
    .trim();

  const styles = cleanStyles.split(/;\s*/).filter(Boolean);

  for (const style of styles) {
    const [property, ...valueParts] = style.split(/:\s*/);
    const value = valueParts.join(':');

    if (property) {
      obj[property.trim()] = value;
    }
  }

  return obj;
}

module.exports = convertToObject;
