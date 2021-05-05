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

  styles = styles.map(x => x.replace(/\s/g, ' ').trim());
  styles = styles.filter(x => x.length > 0);
  styles = styles.map(x => x.split(':'));

  return styles.reduce((a, b) => {
    return {
      ...a,
      [b[0].trim()]: b[1].trim(),
    };
  }, {});
}

module.exports = convertToObject;
