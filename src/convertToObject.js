'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString.split(';').forEach((el) => {
    const clean = el.trim();

    if (!clean) {
      return;
    }

    const [first, ...last] = clean.split(':');

    if (!first || last.length === 0) {
      return;
    }

    const value = last.join(':').trim();
    const key = first.trim();

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
