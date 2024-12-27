'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString.split(';');

  return styles.reduce((prev, item) => {
    if (item.trim()) {
      let [key, val] = item.split(':');

      key = key.trim();
      val = val.trim();
      prev[key] = val;
    }

    return prev;
  }, {});
}

module.exports = convertToObject;
