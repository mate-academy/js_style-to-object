'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(cssString) {
  const result = {};
  let buffer = '';
  let openParens = 0;
  let inString = false;
  let stringChar = '';

  function processRule(rule) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      return;
    }

    const key = rule.slice(0, colonIndex).trim();
    const value = rule
      .slice(colonIndex + 1)
      .replace(/;\s*$/, '')
      .trim();

    if (key && value) {
      result[key] = value;
    }
  }

  for (let i = 0; i < cssString.length; i++) {
    const char = cssString[i];

    if (
      (char === '"' || char === "'") &&
      (i === 0 || cssString[i - 1] !== '\\')
    ) {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char) {
        inString = false;
        stringChar = '';
      }
    }

    if (!inString) {
      if (char === '(') {
        openParens++;
      } else if (char === ')') {
        openParens--;
      }
    }

    if (char === ';' && openParens === 0 && !inString) {
      processRule(buffer);
      buffer = '';
    } else {
      buffer += char;
    }
  }

  if (buffer.trim()) {
    processRule(buffer);
  }

  return result;
}

module.exports = convertToObject;
