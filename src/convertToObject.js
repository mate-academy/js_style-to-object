'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const declarations = sourceString.split(';').filter(Boolean);

  declarations.forEach((declaration) => {
    const [property, value] = declaration.split(':').map((part) => part.trim());

    styles[property] = value;
  });

  return styles;
}

module.exports = convertToObject;
