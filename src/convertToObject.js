'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  const styles = sourceString
    .split(';')
    .filter((item) => (typeof item === 'string' ? item.trim() !== '' : true));

  for (const element of styles) {
    const styleValue = element.split(':');

    const [style, ...values] = styleValue;

    object[style.trim()] = values.join(' ').trim();
  }

  return object;
}

module.exports = convertToObject;
