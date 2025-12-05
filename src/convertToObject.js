'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleDeclaration = sourceString
    .split(';')
    .filter((string) => string.length > 0);

  return styleDeclaration.reduce((acc, currentRule) => {
    const parts = currentRule.split(':');

    if (parts.length >= 2) {
      acc[parts[0].trim()] = parts.slice(1).join(':').trim();
    }

    return acc;
  }, {});
}

// console.log(
//   convertToObject(`
//   background-color:      #fff;
// -webkit-border-radius: 5px;
//   border-radius     : 5px;
//   border: 1px solid #e8e8e8;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   clear   : both       ;
//   cursor: pointer;
//   float: left;
//   font-family: inherit;
//       font-size: 14px;
//   font-weight: 400;
//   height: 42px;
//   line-height:    40px;
//   outline: 0;
//   padding-left    : 18px;
//   padding-right: 30px;
//   ;

//   ;
//   position: relative;

//   text-align: left !important;
//   -webkit-transition: all .2s ease-in-out;
//   transition: all .2s ease-in-out;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   white-space: nowrap;
//   width: auto;
// `),
// );

module.exports = convertToObject;
