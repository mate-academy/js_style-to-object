'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const cleanString = sourceString.trim();

  const rules = cleanString.split(';');

  rules.forEach((rule) => {
    const [rawKey, rawValue] = rule.split(':');

    if (rawKey && rawValue) {
      const key = rawKey.trim();
      let value = rawValue.trim();

      if (value.includes(',')) {
        const lines = value.split(',').map((line) => line.trim());

        value = lines
          .map((line, index) => {
            if (index === 0) {
              return line;
            } else {
              return `          ${line}`;
            }
          })
          .join(',\n');
      }

      styles[key] = value;
    }
  });

  return styles;
}

module.exports = convertToObject;

/**
 * tenho que transformar a propriedade do CSS em 'key' e seu valor em 'value'
 * para isso tenho que separar a string antes dos dois pontos como 'key'
 * e depois dos dois pontos como 'value'
 *
 */
