'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arr = sourceString.split(';');
  const arrTrim = arr.map((el) => el.trim());
  const res = arrTrim.reduce((prev, el, i) => {
    const words = el.split(':').map((word) => word.trim());

    return { ...prev, [words[0]]: words[1] };
  }, {});

  return res;
}

module.exports = convertToObject;
