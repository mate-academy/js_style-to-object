'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const sourceStringArr = sourceString.split(';');

  for (const rule of sourceStringArr) {
    if (!rule.includes(':')) {
      continue;
    }

    const parts = rule.split(':');

    styles[parts[0].trim()] = parts[1].trim();
  }

  return styles;
}

module.exports = convertToObject;
