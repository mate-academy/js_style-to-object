'use strict';

const convertToObject = require('./convertToObject');
const complexStylesString = require('./stylesString');

describe('convertToObject should', () => {
  it('convert an empty string to an empty object', () => {
    expect(convertToObject('')).toEqual({});
  });

  it('convert a single rule to a single object property', () => {
    expect(convertToObject('padding: 20px')).toEqual({ padding: '20px' });
  });

  it('convert a single rule with ; at the end', () => {
    expect(convertToObject('position: absolute;')).toEqual({
      position: 'absolute',
    });
  });

  it('support values with spaces', () => {
    expect(convertToObject('margin: 0 auto;')).toEqual({ margin: '0 auto' });
  });

  it('support properties with dashes', () => {
    expect(convertToObject('font-size: 2rem;')).toEqual({
      'font-size': '2rem',
    });
  });

  it('ignore spaces around the rule', () => {
    expect(convertToObject('    position: fixed;      ')).toEqual({
      position: 'fixed',
    });
  });

  it('ignore extra spaces around property names', () => {
    expect(convertToObject('   color   : #00f;')).toEqual({ color: '#00f' });
  });

  it('ignore extra spaces around values', () => {
    expect(
      convertToObject('background-color:    rebeccapurple      ;'),
    ).toEqual({ 'background-color': 'rebeccapurple' });
  });

  it('ignore tab characters', () => {
    expect(
      convertToObject(
        '  \t  \t border-color   \t  \t :  \t  \t   yellowgreen  \t ; \t',
      ),
    ).toEqual({ 'border-color': 'yellowgreen' });
  });

  it('ignore line break characters', () => {
    expect(
      convertToObject(
        '  \n  \n border   \n  \n :  \n  \n   3px solid green  \n ; \n',
      ),
    ).toEqual({ border: '3px solid green' });
  });

  it('keep extra spaces inside values', () => {
    expect(convertToObject('margin: 0    auto;')).toEqual({
      margin: '0    auto',
    });
  });

  it('convert several rules written in 1 line', () => {
    expect(convertToObject('display: block; margin: 10% auto;')).toEqual({
      display: 'block',
      margin: '10% auto',
    });
  });

  it('ignore extra semicolons', () => {
    expect(
      convertToObject(';; ;display: flex; ; ; margin: 1rem; ; ; '),
    ).toEqual({
      display: 'flex',
      margin: '1rem',
    });
  });

  it('convert mutiline string', () => {
    expect(
      convertToObject(`
      box-sizing: border-box;
      padding: 0.5em 0.75em;
    `),
    ).toEqual({
      'box-sizing': 'border-box',
      padding: '0.5em 0.75em',
    });
  });

  it('ignore empty lines', () => {
    expect(
      convertToObject(`


      box-sizing: border-box;


      width: 300px;

      aspect-ration: 1;

    `),
    ).toEqual({
      'box-sizing': 'border-box',
      width: '300px',
      'aspect-ration': '1',
    });
  });

  it('support multiline values', () => {
    expect(
      convertToObject(`
      box-shadow:
          inset 0 -3em 3em rgb(0 200 0 / 30%),
          0 0 0 2px white,
          0.3em 0.3em 1em rgb(200 0 0 / 60%);
    `),
    ).toEqual({
      'box-shadow': `inset 0 -3em 3em rgb(0 200 0 / 30%),
          0 0 0 2px white,
          0.3em 0.3em 1em rgb(200 0 0 / 60%)`,
    });
  });

  it('convert a complex CSS rule', () => {
    expect(convertToObject(complexStylesString)).toEqual({
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
    });
  });
});

