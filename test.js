import test from 'ava';
import fn from './';

test('blank T-Rex', t => {
	t.regex(fn(), /Hi/);
	t.regex(fn(), /I'm T-Rex/);
	t.regex(fn(), /http:\/\/www\.qwantz\.com\//);
	t.is(fn(''), fn());
});

test('endorses', t => {
	t.regex(fn('endorse'), /^I just can't get enough of (.+)\.$/);
});
