'use strict';

/*
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const parameters = sourceString.split(';');
  const styleParameters = {};

  parameters.map(parameter => {
    const splitParameter = parameter.split(':');
    const first = splitParameter[0];
    const second = splitParameter[1];

    if (first && second) {
      styleParameters[first.trim()] = second.trim();
    }
  });

  return styleParameters;
}

module.exports = convertToObject;
