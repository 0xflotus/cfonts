/***************************************************************************************************************************************************************
 *
 * Colorize unit tests
 *
 **************************************************************************************************************************************************************/


const StripColor = require('./_common.js').StripColor;
const CFonts = require('../../src/lib.js');
const Colorize = CFonts.__test__.Colorize;


test(`Colorize - An undefined string will return just that`, () => {
	expect( Colorize( undefined, 1, [] ) ).toEqual( undefined );
});


test(`Colorize - Strings without color wont change`, () => {
	const test = 'test string without color placeholders';

	expect( Colorize( test, 1, [] ) ).toEqual( test );
});


test(`Colorize - Strings with one color are replaced`, () => {
	const test = 'test string with one color placeholders';

	expect( Colorize( test, 1, ['red'] ) ).toEqual('\u001b[31mtest string with one color placeholders\u001b[39m');
});


test(`Colorize - Strings with two colors are replaced`, () => {
	const test = 'test string <c1>with</c1> one <c2>color</c2> placeholders';

	expect( Colorize( test, 2, ['red', 'red'] ) ).toEqual('test string \u001b[31mwith\u001b[39m one \u001b[31mcolor\u001b[39m placeholders');
});


test(`Colorize - Strings with candy color`, () => {
	const test = Colorize( '<c1>text</c1>', 2, ['candy'] );

	expect( StripColor( test ) ).toEqual('text');
	expect( StripColor( test ).length < test.length ).toEqual( true );
});
