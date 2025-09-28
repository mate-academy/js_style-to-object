'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
'use strict';

function convertToObject(styles) {
  const result = {};

  styles.split(';').forEach(rule => {
  
    const trimmed = rule.trim();
    if (!trimmed) return;

    const parts = trimmed.split(':');
    if (parts.length < 2) return;

    const property = parts[0].trim();
    const value = parts.slice(1).join(':').trim();

    if (property) {
      result[property] = value;
    }
  });

  return result;
}


module.exports = convertToObject;
