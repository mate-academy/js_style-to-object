'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const properties = sourceString.split(';');
  const normalize = properties.map((property) => {
    const keyValue = property
      .split('')
      .filter((char) => char !== '\n' || char !== ' ')
      .slice(0, property.indexOf(':'))
      .join('')
      .trim();
    const value = property
      .split('')
      .slice(property.indexOf(':') + 1)
      .join('')
      .trim();

    return { [keyValue]: value };
  });

  const convertedToObject = normalize.reduce((accummulator, currentObject) => {
    const key = Object.keys(currentObject)[0];
    const value = currentObject[key];

    if (key.length > 0 && value.length > 0) {
      accummulator[key] = value;
    }

    return accummulator;
  }, {});

  return convertedToObject;
}

module.exports = convertToObject;
