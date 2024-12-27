'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(styleStr) {
  const styleObj = {};
  const styleArr = styleStr.split(';');

  styleArr.forEach((style) => {
    const [key, value] = style.split(':').map((s) => s.trim());

    styleObj[key] = value;
  });

  return styleObj;
}

module.exports = convertToObject;
