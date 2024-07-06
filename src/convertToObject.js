'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const KeyAndValues = sourceString.split(';');
  const end = {};

  KeyAndValues.forEach((element) => {
    const preElement = element.split(':');

    if (preElement[0]) {
      preElement[0] = preElement[0].trim();
    }

    if (preElement[1]) {
      preElement[1] = preElement[1].trim();
    }

    end[preElement[0]] = preElement[1];
  });

  return end;
}

module.exports = convertToObject;
