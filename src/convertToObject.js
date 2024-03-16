'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  // rulesString === [
  //   '  width:   15px   ',
  //   'padding:    15px',
  // ]
  // Trim all surrounding white spaces and split each rule on a semi-colon
  const rulesStrings = sourceString.trim().split(';');

  // Map through key value pair strings
  // Elements are long strings with white spaces === '  width:   15px   ',)
  const keyValueStringArray = rulesStrings.map(function (rule) {
    // Separate each key and a value
    const keyValuePair = rule.split(':');

    // Trim both the key and the value
    const trimmedKeyValuePair = keyValuePair.map((element) => element.trim());

    return trimmedKeyValuePair;
  }, rulesStrings);

  // Remove empty elements created cause of extra semicolons
  const keyValueArray = keyValueStringArray.filter(
    (element) => element[0].length > 0,
  );

  // Sort the rules alphabetically
  const sortedRules = keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));

  // Add key value pairs to the result object
  sortedRules.forEach(function (rule) {
    const key = rule[0];
    const value = rule[1];

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
