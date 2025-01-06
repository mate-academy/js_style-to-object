'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(stylesString) {
  const styleObject = {};

  // Normalize the input by keeping multiline values intact
  const normalizedString = stylesString
    .replace(/\n/g, '\n') // Preserve newlines to detect multiline values
    .replace(/\s*;\s*/g, ';') // Normalize semicolon spacing
    .trim();

  const declarations = normalizedString.split(/(?<!\\);/);

  let currentProperty = null;
  let currentValue = '';

  for (const declaration of declarations) {
    if (declaration.includes(':')) {
      if (currentProperty) {
        styleObject[currentProperty.trim()] = currentValue.trim();
        currentProperty = null;
        currentValue = '';
      }

      const [property, ...valueParts] = declaration.split(/\s*:\s*/);

      currentProperty = property;
      currentValue = valueParts.join(':');
    } else {
      currentValue += '\n' + declaration; // Append multiline content
    }
  }

  if (currentProperty) {
    styleObject[currentProperty.trim()] = currentValue.trim();
  }

  return styleObject;
}

module.exports = convertToObject;
