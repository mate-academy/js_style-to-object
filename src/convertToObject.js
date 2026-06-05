'use strict';

function convertToObject(sourceString) {
  const result = {};

  if (!sourceString || sourceString.trim() === '') {
    return result;
  }

  const rules = sourceString.split(';');

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i].trim();

    if (rule === '') {
      continue;
    }

    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    if (property && value) {
      result[property] = value;
    }
  }

  return result;
}

module.exports = convertToObject;
