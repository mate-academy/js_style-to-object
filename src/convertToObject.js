'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const filtered = sourceString
    .split(';')
    .map((el, i, ar) => {
      return ar[i].trim();
    })
    .filter((el) => {
      return el !== ';' && el !== '';
    });

  const keyValuePairs = filtered.map((el, i, ar) => {
    return el.split(':');
  });

  const keyValueObjects = keyValuePairs.map(([key, value]) => {
    return { [key.trim()]: value.trim() };
  });

  const cleaned = keyValueObjects.map((obj) => {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => {
        return [k, v.trim()];
      }),
    );
  });

  const mergedObject = cleaned.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});

  return mergedObject;
}

module.exports = convertToObject;
