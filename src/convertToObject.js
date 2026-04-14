'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const res = {};
  const pairs = sourceString.split(';');
  // console.log(pairs);

  for (const pair of pairs) {
    if (!pair.trim()) {
      continue;
    }

    const [key, value] = pair.split(':');
    // console.log(pairs);

    res[key.trim()] = value.trim();
  }

  // console.log(res);

  return res;
}

// const complexStylesString = `
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
// position: relative;

// text-align: left !important;
//   -webkit-transition: all .2s ease-in-out;
//   transition: all .2s ease-in-out;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;

//   white-space: nowrap;
//   width: auto;
// `;

// const result = convertToObject(complexStylesString);

// console.log(result);

// console.log(
//   result ===
//     {
//       'background-color': '#fff',
//       '-webkit-border-radius': '5px',
//       'border-radius': '5px',
//       border: '1px solid #e8e8e8',
//       '-webkit-box-sizing': 'border-box',
//       'box-sizing': 'border-box',
//       clear: 'both',
//       cursor: 'pointer',
//       float: 'left',
//       'font-family': 'inherit',
//       'font-size': '14px',
//       'font-weight': '400',
//       height: '42px',
//       'line-height': '40px',
//       outline: '0',
//       'padding-left': '18px',
//       'padding-right': '30px',
//       position: 'relative',
//       'text-align': 'left !important',
//       '-webkit-transition': 'all .2s ease-in-out',
//       transition: 'all .2s ease-in-out',
//       '-moz-user-select': 'none',
//       '-ms-user-select': 'none',
//       'user-select': 'none',
//       'white-space': 'nowrap',
//       width: 'auto',
//     },
// ); // outputs true;
module.exports = convertToObject;
