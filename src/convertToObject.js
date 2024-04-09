'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};
  const stringParts = sourceString.split(';');

  stringParts.forEach((declaration) => {
    const [prop, value] = declaration.split(':').map((elem) => elem.trim());

    styles[prop] = value;
  });

  return styles;
}

module.exports = convertToObject;
