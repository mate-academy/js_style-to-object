'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  const stylesRaw = sourceString
    .split(';')
    .map(a => a.split(':').map(b => b.trim()));

  const styles = stylesRaw.reduce((acc, [style, value]) => (style !== ''
    ? {
      ...acc,
      [style]: value,
    }
    : {
      ...acc,
    }), {});

  return styles;
}

module.exports = convertToObject;
