'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationSegments = sourceString
    .split(';')
    .map((segment) => segment.trim())
    .filter(Boolean);

  const stylesObject = declarationSegments.reduce((obj, declaration) => {
    const [prop, value] = declaration.split(':');

    if (prop && value) {
      obj[prop.trim()] = value.trim();
    }

    return obj;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
