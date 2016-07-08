#!/usr/bin/env node

'use strict';

var meow = require('meow');
var heytrex = require('./');

var cli = meow([
	'Usage',
	'  $ heytrex [input]',
	'',
	'Examples',
	'  $ heytrex',
	'  Hi. I\'m T-Rex. Read more about me at <http://www.qwantz.com/>.',
	'  $ heytrex endorse',
	'  I just can\'t get enough of your free improved product that now saves society\'s cooking money.'
]);

console.log(heytrex(cli.input[0] || ''));
