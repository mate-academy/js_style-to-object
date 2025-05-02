'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const normalizedStyles = sourceString
    .trim()
    .split(';')
    .filter((line) => line.includes(':'));

  const arrStyles = normalizedStyles.map((item) => {
    return item.trim().split(':');
  });

  const styles = arrStyles.reduce((object, value) => {
    return { ...object, [value[0].trim()]: value[1].trim() };
  }, {});

  return styles;
}

module.exports = convertToObject;
