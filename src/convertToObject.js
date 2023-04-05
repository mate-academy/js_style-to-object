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

  const object = array.reduce((prev, oneElement) => {
    const name = oneElement.slice(0, oneElement.indexOf(':')).trim();
    const value = oneElement.slice(
      oneElement.indexOf(':') + 1, oneElement.length - 1).trim();

    return {
      ...prev,
      [name]: value,
    };
  }, {});

  return object;
}

module.exports = convertToObject;
