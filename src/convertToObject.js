'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  const newObj = styles.reduce((accum, current) => {
    if (current.trim().length === 0) {
      return accum;
    }

    const style = current.split(':');

    accum[style[0].trim()] = style[1].trim();

    return accum;
  }, {});

  return newObj;
}

module.exports = convertToObject;
