'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObj = {};

  const cssNormalized = sourceString.replaceAll('\t', '');
  const cssSplited = cssNormalized.split(';');
  const cssCommands = cssSplited.filter(
    (css) => css.replaceAll('\n', '').replaceAll(' ', '') !== '',
  );

  for (const css of cssCommands) {
    let [key, value] = css.split(':');

    key = key.trim();
    value = value.trim();
    cssObj[key] = value;
  }

  return cssObj;
}

module.exports = convertToObject;
