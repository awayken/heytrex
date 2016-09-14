# heytrex [![Build Status](https://travis-ci.org/awayken/heytrex.svg?branch=master)](https://travis-ci.org/awayken/heytrex)

> Make T-Rex from [Dinosaur Comics](http://www.qwantz.com/) say things.


## Install

```
$ npm install --save heytrex
```


## Usage

```js
const heytrex = require('heytrex');

heytrex();
//=> 'Hi. I'm T-Rex. Read more about me at <http://www.qwantz.com/>.'

heytrex('endorse');
//=> 'I just can't get enough of your free improved product that now saves society's cooking money.'
```


## API

### heytrex(input)

#### input

Type: `string`

What do you want T-Rex to say?

Supported:

* (nothing)
* endorse ([Dinosaur Comics #2025](http://www.qwantz.com/index.php?comic=2025))


## CLI

```
$ npm install --global heytrex
```

```
$ heytrex --help

  Usage
    heytrex [input]

  Examples
    $ heytrex
    Hi. I'm T-Rex. Read more about me at <http://www.qwantz.com/>.
    $ heytrex endorse
    I just can't get enough of your free improved product that now saves society's cooking money.
```


## License

MIT © [Miles Rausch](http://milesrausch.com)
