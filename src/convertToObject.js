'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sastted = sourceString.split(';');
  const splitted = sastted.filter((satt) => satt.length > 0);
  const formatted = splitted.map((item) => item.trim().split(':'));
  const sas = formatted.map((s) => s.map((x) => x.trim()));

  return sas.reduce((acc, item) => {
    if (item[0] && item[1]) {
      acc[item[0]] = item[1];
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
