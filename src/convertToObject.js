'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  let arrayElements = sourceString.split(';');

  arrayElements = arrayElements
    .filter((item) => item.includes(':'))
    .reduce((prev, item) => {
      const brakeIndex = item.indexOf(':');

      const keyResult = item
        .slice(0, brakeIndex)
        .replaceAll(' ', '')
        .replaceAll('\n', '')
        .replaceAll('\t', '');

      const valueResult = () => {
        const result = item.slice(brakeIndex + 1, item.length);

        const symbols = result.split('');

        let newResult = '';

        if (!symbols.includes(',')) {
          const symbolsCleared = symbols
            .join('')
            .replaceAll('\n', '')
            .replaceAll('"', '')
            .replaceAll('\t', '')
            .split('');

          const firstNonSpaceIndex = symbolsCleared.findIndex(
            (char) => char !== ' ',
          );
          const lastNonSpaceIndex = symbolsCleared.findLastIndex(
            (char) => char !== ' ',
          );

          newResult = symbolsCleared
            .slice(firstNonSpaceIndex, lastNonSpaceIndex + 1)
            .join('');
        }

        if (symbols.includes(',')) {
          const filterCallback = (letter, index) => {
            return (
              index >=
              symbols.findIndex(
                (char) => char !== ' ' && char !== '\n' && char !== '\t',
              )
            );
          };

          newResult = symbols.filter(filterCallback).join('');
        }

        return newResult;
      };

      return {
        ...prev,
        [keyResult]: `${valueResult()}`,
      };
    }, {});

  return arrayElements;
}

module.exports = convertToObject;
