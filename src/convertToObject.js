'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = sourceString
    .split(';')
    .map((style) => style.split(':'))
    .reduce((acc, [key, value]) => {
      if ((key, value)) {
        const [_key, _value] = [key.trim(), value.trim()];

        acc[_key] = _value;
      }

      return acc;
    }, {});

  return styles;
}

module.exports = convertToObject;
