'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleArray = sourceString.replace(/^\n+/g, '').split(';');
  const data = {};

  styleArray.forEach((elem) => {
    const style = elem.trim();

    if (!style) {
      return;
    }

    const [key, value] = style.split(':').map((item) => item.trim());

    if (key && value) {
      data[key] = value;
    }
  });

  return data;
}

module.exports = convertToObject;
