'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');
  const filteredStyles = styles.filter(
    (styleDeclaration) => styleDeclaration.trim() !== '',
  );

  const styleObject = filteredStyles.reduce((accumulator, style) => {
    const [property, value] = style.split(':').map((item) => item.trim());

    accumulator[property] = value;

    return accumulator;
  }, {});

  return styleObject;
}

module.exports = convertToObject;
