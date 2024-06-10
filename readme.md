
  Generates All Possible Texts Contains IN Given String

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

```ts
import { GenerateCombinations } from "generate-full-text";

const MIN_SEARCH_LEN = 3;
const gen = new GenerateCombinations(MIN_SEARCH_LEN);
const combinations = gen.build('Life Is Beautiful');

console.log(combinations);
```

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install generate-full-text
```
## Features

  * Generate Combinations, say: 'Beautiful' => [
  'Bea',       'eau',      'aut',
  'uti',       'tif',      'ifu',
  'ful',       'Beau',     'eaut',
  'auti',      'utif',     'tifu',
  'iful',      'Beaut',    'eauti',
  'autif',     'utifu',    'tiful',
  'Beauti',    'eautif',   'autifu',
  'utiful',    'Beautif',  'eautifu',
  'autiful',   'Beautifu', 'eautiful',
  'Beautiful'
]
