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

  const styleObject = {};

  filteredStyles.forEach((style) => {
    const [property, value] = style.split(':').map((item) => item.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
