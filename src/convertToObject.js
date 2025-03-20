'use strict';

function convertToObject(sourceString) {
  const cleanedString = sourceString
    .replace(/;\s*\n\s*/g, ';')
    .replace(/\s*:\s*/g, ':')
    .trim();

  return cleanedString.split(';').reduce((styles, rule) => {
    const trimmedRule = rule.trim();

    if (trimmedRule.length === 0) {
      return styles;
    }

    const [property, ...valueParts] = trimmedRule.split(':');

    if (property && valueParts.length > 0) {
      const propertyName = property.trim();
      const value = valueParts.join(':').trim();

      styles[propertyName] = value;
    }

    return styles;
  }, {});
}

module.exports = convertToObject;
