'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((acc, cur, i) => {
    if (cur !== '') {
      const parts = cur.split(':');

      if (parts.length > 1) {
        acc[parts[0].trim()] = parts[1].replace('\n', '').trim();
      }
    }

    return acc;
  }, {});
}

module.exports = convertToObject;
