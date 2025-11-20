'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stylesList = sourceString.split(';').map((line) => line.trim());

  return stylesList.reduce((prev, style) => {
    const [prop, value] = style.split(':');

    if (prop && value) {
      return { ...prev, [prop.trim()]: value.trim() };
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
