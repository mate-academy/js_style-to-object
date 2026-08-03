'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarations = sourceString.split(';');
  const filteredDeclarations = declarations.filter((x) => trimElem(x));
  const trimmedDeclarations = filteredDeclarations.map((ele) => ele.trim());

  const result = trimmedDeclarations.reduce((acc, elem) => {
    const pair = elem.split(':');

    pair[0] = pair[0].trim();
    pair[1] = pair[1].trim();

    acc[pair[0]] = pair[1];

    return acc;
  }, {});

  function trimElem(elem) {
    return elem.trim() !== '';
  }

  return result;
}

module.exports = convertToObject;
