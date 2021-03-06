'use strict';

// http://www.qwantz.com/?comic=3175
const response = function () {
	const responses = [
		'It is what it is.',
		'You know I can\'t talk about that.',
		'Let\'s put a pin in that.',
		'Check and mate.',
		'You know I can\'t put a pin in that. It checks and mates what it checks and mates.'
	];

	const responseIndex = parseInt((Math.random() * 100), 10) % responses.length;

	return responses[responseIndex];
};

const endorsement = function () {
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

	let sentence = 'I just can\'t get enough of';

	for (let i = 0; i < words.length; i++) {
		const wordIndex = parseInt((Math.random() * 100), 10) % words[i].length;
		sentence += ' ' + words[i][wordIndex];
	}

	sentence += '.';

	return sentence;
};

const trex = function () {
	const sentence = 'Hi. I\'m T-Rex. Read more about me at <http://www.qwantz.com/>.';

	return sentence;
};

module.exports = function (str) {
	switch (str) {
		case 'endorse':
			return endorsement();
		case 'response':
			return response();
		default:
			return trex();
	}
};
