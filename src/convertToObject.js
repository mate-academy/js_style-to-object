'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrCss = sourceString
    .split(';')
    .map((rule) => rule.trim())
    .filter(Boolean);

  const obgElm = {};

  arrCss.forEach((element) => {
    const [key, value] = element.split(':').map((item) => item.trim());

    obgElm[key] = value;
  });

  return obgElm;
}

module.exports = convertToObject;
