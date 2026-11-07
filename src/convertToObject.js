'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const arrStyles = sourceString.split(';');
  const filterStyle = arrStyles.filter((style) => style.trim() !== '');
  const styles = filterStyle.map((style) => style.split(':'));

  return styles.reduce((acc, el) => {
    const [key, value] = el;

    acc[key.trim()] = value.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
