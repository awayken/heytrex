'use strict';

var endorsement = function () {
	var words = [
		['the', 'this', 'a', 'your', 'you'],
		['wonderful', 'amazing', 'valuable', 'free', 'proven'],
		['new', 'enhanced', 'improved', 'guaranteed'],
		['service', 'product', 'lifestyle'],
		['that', 'which'],
		['now', 'greatly', 'somehow', 'always'],
		['saves', 'simplifies', 'complicates', 'meddles in'],
		['every', 'your', 'society\'s', 'your children\'s', 'Grandma\'s'],
		['cooking', 'bedroom', 'office', 'cellar', 'beachhouse'],
		['performance', 'results', 'love', 'money', 'sex', 'career']
	];
	var sentence = 'I just can\'t get enough of';

	for (var i = 0; i < words.length; i++) {
		sentence = sentence + ' ' + words[i][parseInt((Math.random() * 100), 10) % words[i].length];
	}

	return sentence + '.';
};

var trex = function () {
	return 'Hi. I\'m T-Rex. Read more about me at <http://www.qwantz.com/>.';
};

module.exports = function (str, opts) {
	opts = opts || {};

	switch (str) {
		case 'endorse':
			return endorsement();
		default:
			return trex();
	}
};
