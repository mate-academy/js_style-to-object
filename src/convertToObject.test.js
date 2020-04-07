'use strict';
/* eslint-disable */

const convertToObject = require('./convertToObject');

const stylesString = require('./stylesString');
const EXPECTED_OBJECT = {
  'background-color': '#fff',
  '-webkit-border-radius': '5px',
  'border-radius': '5px',
  'border': '1px solid #e8e8e8',
  '-webkit-box-sizing': 'border-box',
  'box-sizing': 'border-box',
  'clear': 'both',
  'cursor': 'pointer',
  'float': 'left',
  'font-family': 'inherit',
  'font-size': '14px',
  'font-weight': '400',
  'height': '42px',
  'line-height': '40px',
  'outline': '0',
  'padding-left': '18px',
  'padding-right': '30px',
  'position': 'relative',
  'text-align': 'left !important',
  '-webkit-transition': 'all .2s ease-in-out',
  'transition': 'all .2s ease-in-out',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  'user-select': 'none',
  'white-space': 'nowrap',
  'width': 'auto',
};

test('Convert string to object', () => {
  expect(convertToObject(stylesString))
    .toEqual(EXPECTED_OBJECT);
});

test('Object should have same count of keys as styles in css', () => {
  expect(Object.keys(convertToObject(stylesString)).length)
    .toBe(Object.keys(EXPECTED_OBJECT).length);
});
