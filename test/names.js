// const test = require('ava');
import test from 'ava';
import extractFirstNames from '../src';

// Names to test in the format
// {
//   "input": "expected output"
//   …
// }

const testNames = {
  'Anders': 'Anders',
  'anders': 'anders',
  'anders kjellsen': 'anders',
  'Ådne': 'Ådne',
  'ådne': 'ådne',
  'ådne perersen': 'ådne',
  'Ahmed Ahmed': 'Ahmed',
  'Kjell Egil Olsen': 'Kjell Egil',
  'Olga Torunn Pedersen': 'Olga Torunn',
  'Jan Henry T. Olsen': 'Jan Henry',
  'per olav pedersen': 'per olav',
  'Kjell Aase': 'Kjell'
};

//
// Test each name
//

Object.entries(testNames).forEach((entry) => {
  const [input, expected] = entry;
  test(`${expected} is extracted from ${input}`, t => {
    t.is(extractFirstNames(input), expected);
  });
});
