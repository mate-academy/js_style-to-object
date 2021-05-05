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
  styles = styles.flat();

  const object = {};

  for (let i = 1; i < styles.length; i += 2) {
    object[styles[i - 1].trim()] = styles[i].trim();
  }

  return object;
}

module.exports = convertToObject;
