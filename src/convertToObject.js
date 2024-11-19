'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let wasteStyles = sourceString.split(';');
  const obj = {};

  wasteStyles = wasteStyles.map((line) => line.trim());

  for (const styles of wasteStyles.filter(Boolean)) {
    const style = styles.split(':');
    const key = style[0].trimStart().trimEnd();
    const value = style[1].trimStart().trimEnd();

    obj[key] = value;
  }

  return obj;
}

module.exports = convertToObject;
