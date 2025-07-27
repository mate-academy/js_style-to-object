'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((styleOption) => styleOption.trim())
    .filter((styleOption) => styleOption !== '' && styleOption !== ';')
    .reduce((stylesObj, curStyle) => {
      const [option, value] = curStyle.split(':');

      return {
        ...stylesObj,
        [option.trim()]: value.trim(),
      };
    }, {});

  return styles;
}

module.exports = convertToObject;
