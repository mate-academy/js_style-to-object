'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const devided = sourceString.split(';');
  const styleObject = {};

  for (const styles of devided) {
    if (styles.trim() === '') {
      continue;
    }

    const style = styles.split(':');

    const keyPart = style[0].trim();
    const valuePart = style[1].trim();

    styleObject[keyPart] = valuePart;
  }

  return styleObject;
}

module.exports = { convertToObject };
