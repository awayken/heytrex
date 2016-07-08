'use strict';

var endorsement = function () {
	const words = [
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

	for (let i = 0; i < words.length; i++) {
		let wordIndex = parseInt((Math.random() * 100), 10) % words[i].length;
		sentence += ' ' + words[i][wordIndex];
	}

	sentence += '.';

	return sentence;
};

var trex = function () {
	const sentence = 'Hi. I\'m T-Rex. Read more about me at <http://www.qwantz.com/>.';

	return sentence;
};

module.exports = function (str) {
	switch (str) {
		case 'endorse':
			return endorsement();
		default:
			return trex();
	}
};
