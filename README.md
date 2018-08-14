# extract-first-name

Try to extract first name from a full name. Works on common names in Norway.

## Usage

```
import extractFirstNames from '@tight/extract-first-names';

extractFirstNames('per');
// => Per

extractFirstNames('per', { pretty: false });
// => per

extractFirstNames('tor-kjell');
// => Tor-Kjell

extractFirstNames('tor olsen');
// => Tor Olsen

extractFirstNames('Egil Aase');
// => Egil
```
