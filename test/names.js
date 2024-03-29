// const test = require('ava');
import test from 'ava';
import extractFirstNames from '../src';

// Names to test in the format
// {
//   "input": "expected output"
//   …
// }

const testNames = {
  'Olga': 'Olga',
  'olga': 'olga',
  'anders kjellsen': 'anders',
  'Ådne': 'Ådne',
  'ådne': 'ådne',
  'ådne perersen': 'ådne',
  'Ahmed Ahmed': 'Ahmed',
  'Kjell Egil Olsen': 'Kjell Egil',
  'Olga Torunn Pedersen': 'Olga Torunn',
  'Jan Henry T. Olsen': 'Jan Henry',
  'per olav pedersen': 'per olav',
  'Kjell Aase': 'Kjell',
  'tor-even': 'tor-even',
  'per oscar williamsen': 'per oscar',
  'ågot danielsen': 'ågot'
};

//
// Test all the test names
//

Object.entries(testNames).forEach((entry) => {
  const [input, expected] = entry;
  test(`${expected} is extracted from ${input}`, t => {
    t.is(extractFirstNames(input, { pretty: false }), expected);
  });
});

//
// Case conversion
//
test('Names can be converted to title case', t => {
  t.is(extractFirstNames('lise olsen'), 'Lise');
  t.is(extractFirstNames('KRISTIN OLSEN'), 'Kristin');
  t.is(extractFirstNames('øyvind'), 'Øyvind');
  t.is(extractFirstNames('ØYVIND'), 'Øyvind');
  t.is(extractFirstNames('tor-kjell'), 'Tor-Kjell');
  t.is(extractFirstNames('TOR-KJELL'), 'Tor-Kjell');
  t.is(extractFirstNames('tor-KJELL'), 'Tor-Kjell');
  t.is(extractFirstNames('Peder Ivar'), 'Peder Ivar');
  t.is(extractFirstNames('PEDER IVAR OLSEN'), 'Peder Ivar');
});
