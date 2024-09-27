'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssProps = sourceString.split(';');
  const cssPropsObj = {};

  cssProps.forEach(rule => {
    const ruleParts = rule.split(':');

    if (ruleParts[0] && ruleParts[1]) {
      const key = ruleParts[0].trim();
      const value = ruleParts[1].trim();

      cssPropsObj[key] = value;
    }
  });

  return cssPropsObj;
}

module.exports = convertToObject;
