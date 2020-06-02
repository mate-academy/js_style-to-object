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
  const styles = sourceString
    .split(';')
    .reduce((style, rule) => {
      const trimmedEl = rule.trim();

      if (trimmedEl.length) {
        const [key, value] = trimmedEl.split(':');

        style[key.trim()] = value.trim();
      }

      return style;
    }, {});

  return styles;
}

module.exports = convertToObject;
