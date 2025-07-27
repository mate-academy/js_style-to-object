'use strict';

function convertToObject(styleString) {
  const styleObject = {};

  // Usuwamy tylko nadmiarowe średniki i puste linie
  // Dzielimy po średniku, ale multiline wartości zostaną zachowane
  const rules = [];
  let buffer = '';
  const insideValue = false;

  for (let i = 0; i < styleString.length; i++) {
    const char = styleString[i];

    if (char === ';' && !insideValue) {
      const rule = buffer.trim();

      if (rule) {
        rules.push(rule);
      }
      buffer = '';
    } else {
      if (char === '\n' || char === '\r') {
        // zachowaj nowe linie w wartości
        buffer += char;
      } else {
        buffer += char;
      }
    }
  }

  // dodaj ostatnią regułę, jeśli jest
  if (buffer.trim()) {
    rules.push(buffer.trim());
  }

  for (const rule of rules) {
    const colonIndex = rule.indexOf(':');

    if (colonIndex === -1) {
      continue;
    }

    const property = rule.slice(0, colonIndex).trim();
    const value = rule.slice(colonIndex + 1).trim();

    styleObject[property] = value;
  }

  return styleObject;
}

module.exports = convertToObject;
