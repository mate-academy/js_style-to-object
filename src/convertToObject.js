'use strict';

/**
 * Implement convertToObject function:
 *

 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const array = sourceString.split(`\n`).filter(x => x.length > 4);

  const object = array.reduce((prev, oneElement) => ({
    ...prev,
    [oneElement.slice(0, oneElement.indexOf(':')).trim()]:
    oneElement.slice(oneElement.indexOf(':') + 1, oneElement.length - 1).trim(),
  }), {});

  return object;
}

module.exports = convertToObject;
