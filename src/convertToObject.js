'use strict';

const sourceString = `
  background-color:      #fff;
-webkit-border-radius: 5px;
  border-radius     : 5px;
  border: 1px solid #e8e8e8;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  clear   : both       ;
  cursor: pointer;
  float: left;
  font-family: inherit;
      font-size: 14px;
  font-weight: 400;
  height: 42px;
  line-height:    40px;
  outline: 0;
  padding-left    : 18px;
  padding-right: 30px;
  ;

  ;
  position: relative;


  text-align: left !important;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  box-shadow:
          inset 0 -3em 3em rgb(0 200 0 / 30%),
          0 0 0 2px white,
          0.3em 0.3em 1em rgb(200 0 0 / 60%);
  white-space: nowrap;
  width: auto;
`;

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const cssObject = {};

  const noSpacesArray = sourceString.replace(/\n|\r/g, '').split(';');
  const arrayOfArrays = noSpacesArray
    .map((element) => element.split(':'))
    .filter((element) => element.length === 2)
    .map((element) => [element[0].trim(), element[1].trim()]);

  arrayOfArrays.forEach((element) => {
    cssObject[element[0]] = element[1];
  });

  return cssObject;
}

const result = convertToObject(sourceString);

console.log(result);

module.exports = convertToObject;
