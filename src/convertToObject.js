'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const obj = {};
  const fixed = sourceString.replace(/[\s]+/g, ' ')
    .split(';')
    .filter(elem => elem !== ' ');

  fixed.map(elem => {
    const divided = elem.split(':');
    obj[divided[0].trim()] = divided[1].trim();
  });
  return obj;
}

module.exports = convertToObject;
