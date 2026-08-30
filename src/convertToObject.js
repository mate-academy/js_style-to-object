'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.split(';');

  styles = styles.map((element) => element.trim().split(':'));
  styles = styles.filter((element) => element.length === 2);
  styles = styles.map((element) => [element[0].trim(), element[1].trim()]);

  return styles.reduce((acc, element) => {
    acc[element[0]] = element[1];

    return acc;
  }, {});
}

module.exports = convertToObject;
