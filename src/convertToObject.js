'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const arrTrim = arr.map((el) => el.trim());

  const res = arrTrim.reduce((prev, el) => {
    if (!el) {
      return prev;
    }

    const [key, value] = el.split(':').map((word) => word.trim());

    if (!key || value === undefined) {
      return prev;
    }

    prev[key] = value;

    return prev;
  }, {});

  return res;
}

module.exports = convertToObject;
