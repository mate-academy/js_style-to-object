'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  if (sourceString.length === 0) {
    return {};
  }

  const GROUP_STYLE = sourceString.trim().split(';');
  const GET_CLEAN_STYLE = GROUP_STYLE.map((pair) => pair.trim()).filter(
    (style) => style !== '',
  );

  const SEPARATION_STYLE = GET_CLEAN_STYLE.map((pair) => {
    return pair.trim().split(':');
  });
  const GET_STYLE_IN_OBJECT = SEPARATION_STYLE.reduce((acc, style) => {
    acc[style[0].trim()] = style[1].trim();

    return acc;
  }, {});

  return GET_STYLE_IN_OBJECT;
}

module.exports = convertToObject;
