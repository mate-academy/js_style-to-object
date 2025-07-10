'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  // write your code here
  /*
  splitting "sourceString" into smaller substrings delimited by the semicolon,
  which gives all of the individual CSS rules, but maintains ALL whitespaces
  that are contained in the substrings, such as spaces, tabs, newlines, etc.
  */
  const splitRules = sourceString.split(';');

  /*
  trimming all of the whitespaces from the beginning and the end of all of the
  substrings contained in "splitRules[]", which includes any spaces, tabs,
  newlines, etc., which makes it easier to have all of the CSS rules contained
  in a single line
  */
  const trimmedSplitRules = splitRules.map((currentRule) => currentRule.trim());

  /*
  removing any blank CSS rules that were created from the previous steps in the
  function. blank rules could be generated if there were any dangling semicolons
  that came after a closing semicolon, but there was nothing in-between, so we
  will remove these invalid CSS rules
  */
  const nonBlankRules = trimmedSplitRules.filter(
    (currentRule) => currentRule.trim() !== '',
  );

  /*
  iterating through "nonBlankRules[]" and taking the current rule and splitting
  it into two pieces, using the semicolon as the splitting point. once we have
  our two pieces, we start with the first half, which is the portion of the CSS
  rule from the left of the semicolon. we are removing all whitespaces from the
  end of the first half, as we want to ignore it from our CSS rule format. then,
  we continue with the second half, which is the portion of the CSS rule from
  the right of the semicolon. we are removing all whitespaces from the beginning
  of the second half, as we want to ignore it from our CSS rule format, but we
  will be maintaining any whitespaces that are written in-between the second
  half of the rule, as this allows support for extra spaces inside values and
  multiline values
  */
  const finalModifiedRules = [];

  for (let i = 0; i < nonBlankRules.length; i++) {
    let modifiedRule = '';
    const rulePieces = nonBlankRules[i].split(':', 2);

    const modifiedFirstHalf = rulePieces[0].trimEnd();
    const modifiedSecondHalf = rulePieces[1].trimStart();

    modifiedRule = modifiedFirstHalf + ':' + modifiedSecondHalf;

    finalModifiedRules.push(modifiedRule);
  }

  /*
  iterating through "finalModifiedRules[]", which contains all of the CSS rules
  in their proper formats, and taking the current rule and splitting it into
  two pieces, using the semicolon as the splitting point. once we have our two
  pieces, we are going to take the first half of our rule and we are going to
  use it as the key to be inserted into "stylesObject{}", and then we are going
  to take the second half of our rule and we are going to use it as the value.
  once all of the CSS rules have been inserted as key-value pairs into the
  object, we are going to return it at the end
  */
  const stylesObject = {};

  for (let i = 0; i < finalModifiedRules.length; i++) {
    const keysAndValues = finalModifiedRules[i].split(':', 2);

    stylesObject[keysAndValues[0]] = keysAndValues[1];
  }

  return stylesObject;
}

module.exports = convertToObject;
