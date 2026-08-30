'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let styles = sourceString.split(';');
  const resultObject = {};

  styles = styles.map((element) => element.trim().split(':'));
  styles = styles.filter((element) => element.length === 2);
  styles = styles.map((element) => [element[0].trim(), element[1].trim()]);

  styles.forEach((element) => (resultObject[element[0]] = element[1]));

  return resultObject;
}

module.exports = convertToObject;
