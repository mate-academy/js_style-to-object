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
  let styles = sourceString.split(';');

  styles = styles.map(style => style.replace(/\s/g, ' ').trim());
  styles = styles.filter(style => style.length > 0);
  styles = styles.map(style => style.split(':'));

  return styles.reduce((prev, style) => {
    return {
      ...prev,
      [style[0].trim()]: style[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
