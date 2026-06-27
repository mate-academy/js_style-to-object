'use strict';

module.exports = function convertToObject(stylesString) {
  const result = {};

  const rules = stylesString.split(';');

  for (const rule of rules) {
    const index = rule.indexOf(':');

    if (index === -1) {
      continue;
    }

    const key = rule.slice(0, index).trim();
    const value = rule.slice(index + 1).trim();

    if (!key) {
      continue;
    }

    result[key] = value;
  }

  return result;
};
