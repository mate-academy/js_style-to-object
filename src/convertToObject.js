'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');

  const elements = properties.map((props) => props.split(':'));
  const validElements = elements.filter((e) => e.length === 2);

  const result = validElements.reduce((res, e) => {
    res[e[0].trim()] = e[1].trim();

    return res;
  }, {});

  return result;
}

module.exports = convertToObject;
