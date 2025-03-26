'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(
    sourceString
      .split(';')
      .map((line) => line.trim())
      .filter((line) => line)
      .map((line) => {
        const [key, ...value] = line.split(':');

        return [
          key.trim(),
          value
            .join(':')
            .trim()];
      }),
  );
}

module.exports = convertToObject;
