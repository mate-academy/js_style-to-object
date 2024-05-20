'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
const convertToObject = (sourceString) => {
  const splittedSourceString = sourceString.split(';');
  const formatedStylesArray = [];
  const StylesObject = {};

  splittedSourceString.forEach((x) => {
    formatedStylesArray[formatedStylesArray.length] = x
      .replace(/[\n\t]/g, '')
      .replace(/[',']/g, ',\n')
      .split(':');
  });

  const filteredStylesArray = formatedStylesArray.filter((x) => x.length === 2);

  filteredStylesArray.forEach((x) => {
    StylesObject[x[0].trim()] = x[1].trim();
  });

  return StylesObject;
};

module.exports = convertToObject;
