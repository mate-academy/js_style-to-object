'use strict';

function convertToObject(stylesString) {
  if (!stylesString) {
    return {};
  }

  const rules = stylesString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  const styleObject = rules.reduce((acc, rule) => {
    const [property, ...valueParts] = rule.split(':');

    if (!property || valueParts.length === 0) {
      return acc;
    }

    const key = property.trim();
    const value = valueParts.join(':').replace(/^\s+|\s+$/g, '');

    acc[key] = value;

    return acc;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
