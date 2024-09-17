'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.trim().split(';');
  styles.pop();
  const res = {};

  styles.forEach(element => {
    const property = element.split(':');
    res[property[0].trim()] = property[1].trim();
  });

  return res;
}

module.exports = convertToObject;
