import NumeralDecoder from '../src/NumeralDecoder';

let numeralDecoder: NumeralDecoder;

describe('Error handler tests', () => {
    beforeEach(() => (numeralDecoder = new NumeralDecoder()));

    it('When to numerals provided can sum', () => {
        expect(numeralDecoder.decode('XX')).toEqual(20);
    });

    it('When to numerals provided can subtract', () => {
        expect(numeralDecoder.decode('IV')).toEqual(4);
    });

    it('When to numerals provided can subtract', () => {
        expect(numeralDecoder.decode('XLIV')).toEqual(44);
    });

    it('When to numerals provided can subtract', () => {
        expect(numeralDecoder.decode('XLVII')).toEqual(47);
    });

    it('When to numerals provided can subtract', () => {
        expect(numeralDecoder.decode('XCIX')).toEqual(99);
    });
});
