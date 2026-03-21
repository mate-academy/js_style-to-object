# Convert Style String to Object

> [JS Task Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

## Task description:

Implement a `convertToObject` function that takes a string with styles and returns an object where CSS declarations are converted to keys and values.

Example:

```javascript
'use strict';

const complexStylesString = `
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
`;

const result = convertToObject(complexStylesString);

console.log(result === {
  'background-color': '#fff',
  '-webkit-border-radius': '5px',
  'border-radius': '5px',
  border: '1px solid #e8e8e8',
  '-webkit-box-sizing': 'border-box',
  'box-sizing': 'border-box',
  clear: 'both',
  cursor: 'pointer',
  float: 'left',
  'font-family': 'inherit',
  'font-size': '14px',
  'font-weight': '400',
  height: '42px',
  'line-height': '40px',
  outline: '0',
  'padding-left': '18px',
  'padding-right': '30px',
  position: 'relative',
  'text-align': 'left !important',
  '-webkit-transition': 'all .2s ease-in-out',
  transition: 'all .2s ease-in-out',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none',
  'white-space': 'nowrap',
  width: 'auto',
}) // outputs true;
```
