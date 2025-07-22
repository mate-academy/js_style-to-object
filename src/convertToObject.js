'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const object = {};

  // made array with elements, and filter empty elements
  const styles = sourceString
    .split(';')
    .filter((item) => (typeof item === 'string' ? item.trim() !== '' : true));

  // made a loop for for elements of array(styles)
  for (const element of styles) {
    const styleValue = element.split(':');
    // for every element made a array with
    // first element - name of style and others elements - values of this styles
    const [style, ...values] = styleValue;

    object[style.trim()] = values.join(' ').trim();

    // add to object style and values without spaces
    // at the end & start, and with spaces between values
  }

  return object;
}

module.exports = convertToObject;
