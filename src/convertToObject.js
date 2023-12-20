'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes a string with styles
 * (see an example in [stylesString.js](./stylesString.js))
 * and returns an object where CSS properties are keys
 * and values are the values of related CSS
 * properties (see an exampl in [test file](./convertToObject.test.js))
 *
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const lines = sourceString.split('\n');

  const formatedLine = lines
    .map(line => line.replace(';', ''))
    .filter(line => line.trim().length !== 0)
    .reduce((result, line) => {
      const arr = line.split(':').map(lineKey => lineKey.trim());
      const [key, value] = arr;

      result[key] = value;

      return result;
    }, {});

  // eslint-disable-next-line no-console
  console.log(formatedLine);

  return formatedLine;
}

convertToObject(`
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


white-space: nowrap;
width: auto;
`);

module.exports = convertToObject;
