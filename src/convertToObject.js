/* eslint-disable max-len */
'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';')
    .map(style => style.trim())
    .filter(style => style !== '');

  const styleObject = {};

  styles.forEach(style => {
    const [property, value] = style.split(':').map(part => part.trim());

    styleObject[property] = value;
  });

  return styleObject;
}

module.exports = convertToObject;
