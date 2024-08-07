// 'use strict';
const complexStylesString = require('./stylesString');

function convertToObject(sourceString) {
  const obj = {};

  // Split by semicolons to get individual rules, then filter out empty ones
  const rules = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  rules.forEach((rule) => {
    const [key, ...valueParts] = rule.split(':').map((part) => part.trim());
    const value = valueParts.join(':'); // Rejoin value parts in case of pseudo-selectors like ":hover"

    if (key && value) {
      obj[key] = value;
    }
  });

  return obj;
}

convertToObject(complexStylesString);

module.exports = convertToObject;
