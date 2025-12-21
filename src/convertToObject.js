'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  // Розбиваємо весь рядок по ";", бо кожне правило CSS закінчується ;
  sourceString.split(';').forEach((rule) => {
    const trimRule = rule.trim();

    if (!trimRule) {
      return;
    }

    const [key, ...valueParts] = trimRule.split(':');

    if (!valueParts.length) {
      return;
    }

    // eslint-disable-next-line max-len
    const value = valueParts.join(':').trim();

    cssObject[key.trim()] = value;
  });

  return cssObject;
}

module.exports = convertToObject;
