'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let stylesMap = {};
  const trimmed = sourceString.trim();
  const parts = trimmed.split(';');
  const items1 = parts.map((s) => s.trim());
  const items = items1.filter((s) => s.length > 0);

  stylesMap = items.reduce((acc, item) => {
    const [key, ...rest] = item.split(':');

    if (!rest.length) {
      return acc;
    }

    const keyTrimmed = key.trim();

    if (!keyTrimmed) {
      return acc;
    }

    const value = rest.join(':').trim();

    return { ...acc, [keyTrimmed]: value };
  }, {});

  return stylesMap;
}

module.exports = convertToObject;
