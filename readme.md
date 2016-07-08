# heytrex [![Build Status](https://travis-ci.org/awayken/heytrex.svg?branch=master)](https://travis-ci.org/awayken/heytrex)

> My brilliant module


## Install

```
$ npm install --save heytrex
```


## Usage

```js
const heytrex = require('heytrex');

heytrex('unicorns');
//=> 'unicorns & rainbows'
```


## API

### heytrex(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`<br>
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global heytrex
```

```
$ heytrex --help

  Usage
    heytrex [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ heytrex
    unicorns & rainbows
    $ heytrex ponies
    ponies & rainbows
```


## License

MIT © [Miles Rausch](http://milesrausch.com)
