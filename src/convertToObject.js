'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const stringArray = sourceString
    .split(';')
    .map((words) => words.split(':'))
    .map((words) => {
      return words.map((string) => {
        const trimmedStr = string.trim();

        return trimmedStr;
      });
    });
  const styleObj = {};

  stringArray.map((key) => {
    return (styleObj[key[0]] = key[1]);
  });

  return styleObj;
}

convertToObject(
  ` "-moz-user-select": "none",
  -   "-ms-user-select": "none",
  -   "-webkit-border-radius": "5px",
  -   "-webkit-box-sizing": "border-box",
  -   "-webkit-transition": "all .2s ease-in-out",
  -   "background-color": "#fff",
  -   "border": "1px solid #e8e8e8",
  -   "border-radius": "5px",
  -   "box-sizing": "border-box",
  -   "clear": "both",
  -   "cursor": "pointer",
  -   "float": "left",
  -   "font-family": "inherit",
  -   "font-size": "14px",
  -   "font-weight": "400",
  -   "height": "42px",
  -   "line-height": "40px",
  -   "outline": "0",
  -   "padding-left": "18px",
  -   "padding-right": "30px",
  -   "position": "relative",
  -   "text-align": "left !important",
  -   "transition": "all .2s ease-in-out",
  -   "user-select": "none",
  -   "white-space": "nowrap",
  -   "width": "auto",`,
);

module.exports = convertToObject;
