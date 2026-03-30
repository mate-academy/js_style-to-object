'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitString = sourceString.split(';');
  const cssProperties = splitString.reduce((prev, item) => {
    const [param, value] = item.split(':');

    if (!param || !value) {
      return prev;
    }

    return { ...prev, [param.trim()]: value.trim() };
  }, {});

  return cssProperties;
}

module.exports = convertToObject;
