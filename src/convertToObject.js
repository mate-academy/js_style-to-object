'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return Object.fromEntries(sourceString.split(';')
    .map(entries => entries.split(':')
      .map(words => words.split(' ')
        .filter(
          word => word !== '\n'
          && word !== '\n\n'
          && word !== '\n\n\n'
          && word.length > 0
        )
        .map(x => x.trim().replace(/^\\n/))
        .join(' ')
      ))
    .filter(
      group => group.length !== 1
    )
  );
}

module.exports = convertToObject;
