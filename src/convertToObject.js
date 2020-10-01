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
    const key = splitParameter[0];
    const value = splitParameter[1];

    if (key && value) {
      styleParameters[key.trim()] = value.trim();
    }
  });

  return styleParameters;
}

module.exports = convertToObject;
