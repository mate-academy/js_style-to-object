'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let convertString = sourceString.split(';');

  convertString = convertString.map((item) => item.split(':'));

  const filterString = convertString.filter(
    (item) => item[0].trim().length > 0,
  );

  const objectConvert = filterString.map(([title, value]) => ({
    [title.trim()]: value.trim(),
  }));

  return objectConvert.reduce((prev, item) => ({ ...prev, ...item }), {});
}

module.exports = convertToObject;
