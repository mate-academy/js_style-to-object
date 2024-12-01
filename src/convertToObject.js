'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObj = {};
  const arrStyles = sourceString.replace(/ {2,}/gm, ' ');
  const keys = arrStyles.match(/-?\w.+\w(?= *:)/gm);
  const values = arrStyles.match(/:.+;/gm);

  values.forEach((item, i) => {
    values[i] = item.replace(/ *;|: */g, '');
  });

  keys.forEach((item, i) => {
    styleObj[item] = values[i];
  });

  return styleObj;
}

module.exports = convertToObject;
