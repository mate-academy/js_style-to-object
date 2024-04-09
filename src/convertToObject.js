'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const splitted = sourceString.split(';');
  const filtred = splitted.filter((style) => style.trim().length !== 0);
  const styleObj = filtred.reduce((acc, current) => {
    const [key, value] = current.split(':');

    acc[key.trim()] = value.trim();

    return acc;
  }, {});

  return styleObj;
}

module.exports = convertToObject;
