'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const separatedStyles = styles.reduce((acc, style) => {
    const [property = '', value = ''] = style.split(':');
    const propWithoutSpaces = property.trim();
    const valueWithoutSpaces = value.trim();
    const isEmptyPropOrValue = !(propWithoutSpaces && valueWithoutSpaces);

    return isEmptyPropOrValue
      ? acc
      : { ...acc, [propWithoutSpaces]: valueWithoutSpaces };
  }, {});

  return separatedStyles;
}

module.exports = convertToObject;
