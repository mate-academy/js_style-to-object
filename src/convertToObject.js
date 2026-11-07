'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');
  const filterStyle = styleDeclarations.filter((style) => style.trim() !== '');
  const styles = filterStyle.map((style) => {
    const separatorIndex = style.indexOf(':');
    const key = style.slice(0, separatorIndex);
    const value = style.slice(separatorIndex + 1);

    return [key, value];
  });

  return styles.reduce((acc, el) => {
    const [key, value] = el;

    acc[key.trim()] = value.trim();

    return acc;
  }, {});
}

module.exports = convertToObject;
