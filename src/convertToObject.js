'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};

  // Розбиваємо весь рядок по ";", бо кожне правило CSS закінчується ;
  sourceString.split(';').forEach((rule) => {
    let string = rule;

    string = rule.trim();

    if (!string) {
      return;
    }

    const [key, ...valueParts] = rule.split(':');

    if (!valueParts.length) {
      return;
    }

    // eslint-disable-next-line max-len
    const value = valueParts.join(':').trim();

    obj[key.trim()] = value;
  });

  return obj;
}

module.exports = convertToObject;
