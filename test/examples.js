/***************************************************************************************************************************************************************
 *
 * cfonts, Sexy fonts for the console. (CLI output)
 *
 * Testing the API side of things.
 *
 * @license     https://github.com/dominikwilkowski/cfonts/blob/master/LICENSE  GNU GPLv2
 * @author      Dominik Wilkowski  hi@dominik-wilkowski.com
 * @repository  https://github.com/dominikwilkowski/cfonts
 *
 **************************************************************************************************************************************************************/

'use strict';

const CFonts = require('../lib/index.js');

let prettyFont = CFonts.render('H', {
	font: 'simple',
});

console.log(prettyFont.string);
console.log(prettyFont.array);
console.log(prettyFont.lines);
console.log(prettyFont.options);

CFonts.say('Hello world!', {
	font: 'block',
	align: 'left',
	colors: ['white'],
	background: 'transparent',
	letterSpacing: 1,
	lineHeight: 1,
	space: true,
	maxLength: '0',
});

CFonts.say('Hello world!', {
	background: 'GREEN',
	backgroundColor: 'RED',
});

CFonts.say('Hello|world!', {
	font: 'console',
	align: 'center',
	colors: ['red'],
});

CFonts.say(`Hello
world\nagain|!`, {
	font: 'simple',
	align: 'center',
	colors: ['red'],
});


// for issue #13
Array.prototype.foo = () => { return 0; };
CFonts.say('Hello', { colors: [ 'green' ] });
