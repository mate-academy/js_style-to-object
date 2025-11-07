'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclarations = sourceString.split(';');

  const styleObject = styleDeclarations.reduce((accumulator, val) => {
    const correctedValue = val.replaceAll('\n', '').trim();

    if (correctedValue.length !== 0) {
      if (correctedValue.includes(':')) {
        const k = correctedValue.split(':')[0].trim();
        let v = correctedValue.split(':')[1].trim();

        if (v.includes(',')) {
          v = v.replaceAll(',', ',\n');
        }

        return Object.assign(accumulator, { [k]: `${v}` });
      }
    } else {
      return accumulator;
    }
  }, {});

  return styleObject;
}

module.exports = convertToObject;
