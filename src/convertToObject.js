'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const nonSpaced = sourceString.split(';');

  const styles = nonSpaced.reduce((ac, el) => {
    const trimmedEl = el.trim();

    if (trimmedEl.length > 0) {
      const [key, value] = trimmedEl.split(':');

      ac[key.trim()] = value.trim();
    }

    return ac;
  }, {});

  return styles;
}

module.exports = convertToObject;
