'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesObject = sourceString.split(';');
  const filtered = stylesObject.filter((str) => str.trim() !== '');

  const result = filtered.reduce((acc, item) => {
    const [rawKey, ...rawValueParts] = item.split(':');

    if (!rawKey || rawValueParts.length === 0) {
      // некоректний формат, пропускаємо
      return acc;
    }

    const key = rawKey.trim();
    const value = rawValueParts.join(':').trim();

    if (!key || !value) {
      // ключ або значення порожні після обрізання
      return acc;
    }

    acc[key] = value;

    return acc;
  }, {});

  return result;
}

module.exports = convertToObject;
